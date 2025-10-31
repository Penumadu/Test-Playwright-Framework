// Import Playwright browser and configuration types
// Import dotenv to load environment variables
import { chromium, FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
import { mkdir } from 'fs/promises';
import path from 'path';

// Load environment variables from .env file
dotenv.config();

/**
 * Global setup function runs once before all tests
 * Handles authentication and saves session state for reuse
 * @param config - Full Playwright configuration object
 */
async function globalSetup(config: FullConfig) {
  // Path where authenticated session state will be saved
  // This file is used by all tests to maintain logged-in state
  const storageStatePath = '.auth/user.json';

  // Retrieve credentials from environment variables
  // Supports both USERNAME and E2E_USERNAME for flexibility
  const username = process.env.USERNAME || process.env.E2E_USERNAME;
  // Supports both PASSWORD and E2E_PASSWORD for flexibility
  const password = process.env.PASSWORD || process.env.E2E_PASSWORD;
  // Get base URL from environment variables
  const baseURL = process.env.BASE_URL;

  // If credentials are not provided, skip login and leave storage state empty
  // Allows tests to run without authentication if not configured
  if (!username || !password || !baseURL) {
    console.warn('Warning: Credentials or BASE_URL not provided. Skipping authentication setup.');
    return;
  }

  // Ensure the .auth directory exists before saving storage state
  const authDir = path.dirname(storageStatePath);
  await mkdir(authDir, { recursive: true });

  // Launch Chromium browser in headless mode
  const browser = await chromium.launch({ headless: true });
  // Create a new page/tab in the browser
  const page = await browser.newPage();

  try {
    // Navigate to the application base URL
    await page.goto(baseURL);
    // Example login flow; update selectors to match your application
    // Fill in the username input field with credentials from .env
    await page.fill('input[name="username"]', username);
    // Fill in the password input field with credentials from .env
    await page.fill('input[name="password"]', password);
    // Click the login/submit button to authenticate
    await page.click('button[type="submit"]');
    // Wait for navigation or a successful login indicator
    // This ensures login is complete before saving state
    await page.waitForLoadState('networkidle');
    
    // Optional: Wait for a URL change or element that indicates successful login
    // This helps ensure authentication was successful before saving state
    // await page.waitForURL(url => !url.includes('/login'), { timeout: 10000 });

    // Save the browser context's storage state (cookies, localStorage, etc.)
    // This allows all subsequent tests to use this authenticated session
    await page.context().storageState({ path: storageStatePath });
    console.log(`Authentication state saved to ${storageStatePath}`);
  } catch (error) {
    console.error('Error during authentication setup:', error);
    throw error;
  } finally {
    // Close the browser to free up resources
    await browser.close();
  }
}

// Export the setup function for Playwright to use
export default globalSetup;



