// Import Playwright configuration utilities and device presets
import { defineConfig, devices } from '@playwright/test';
// Import dotenv to load environment variables
import dotenv from 'dotenv';

// Load environment variables from .env file before configuration
dotenv.config();

// Check if running in CI environment (GitHub Actions, etc.)
// Converts CI env variable to boolean (true if set, false otherwise)
const isCI = !!process.env.CI;

// Export Playwright configuration object
export default defineConfig({
  // Directory where test files are located
  testDir: './tests',
  // Maximum time for a single test to complete (60 seconds)
  timeout: 60 * 1000,
  // Maximum time for expect assertions to complete (10 seconds)
  expect: { timeout: 10 * 1000 },
  // Run all tests in parallel for faster execution
  fullyParallel: true,
  // Prevent test.only() from running in CI (ensures all tests run)
  forbidOnly: isCI,
  // Retry failed tests: 2 retries in CI, 0 locally for faster feedback
  retries: isCI ? 2 : 0,
  // Number of parallel workers: 2 in CI, auto-detect locally
  workers: isCI ? 2 : undefined,
  // Reporters: HTML report and list reporter for console output
  reporter: [['html', { open: 'never' }], ['list']],
  // Default options applied to all tests
  use: {
    // Base URL for all tests (from .env or default staging environment)
    baseURL: process.env.BASE_URL || 'https://intra.stage.sites.gov.on.ca',
    // Capture trace only on first retry (saves disk space)
    trace: 'on-first-retry',
    // Take screenshots only when tests fail
    screenshot: 'only-on-failure',
    // Keep videos only for failed tests
    video: 'retain-on-failure',
    // Use pre-authenticated storage state from global setup
    storageState: '.auth/user.json'
  },
  // Browser projects: run tests on multiple browsers
  projects: [
    // Authenticated tests: use the storage state from global setup
    // All tests except login will use pre-authenticated state
    {
      // Chromium project (Chrome/Edge browsers)
      name: 'Chromium',
      // Use Desktop Chrome device preset for consistent viewport/settings
      use: { ...devices['Desktop Chrome'] }
    },
    {
      // Firefox project
      name: 'Firefox',
      // Use Desktop Firefox device preset
      use: { ...devices['Desktop Firefox'] }
    },
    {
      // WebKit project (Safari browser)
      name: 'WebKit',
      // Use Desktop Safari device preset
      use: { ...devices['Desktop Safari'] }
    },
    // Login tests: run without storage state to test actual login flow
    // This allows login tests to verify the login process works correctly
    {
      name: 'login',
      testMatch: /.*login\.spec\.ts/,
      // Don't use storageState for login tests so they can test login flow
      use: {
        ...devices['Desktop Chrome'],
        storageState: undefined,
      },
    },
  ],
  // Global setup runs once before all tests (handles authentication)
  globalSetup: './src/auth/global.setup.ts'
});



