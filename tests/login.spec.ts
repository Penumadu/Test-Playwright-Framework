// Import custom test fixture with page object fixtures
// Import utility function to read environment variables
// Import test data from JSON file
import { test, expect } from '@fixtures/test';
import { getEnvVar } from '@utils/env';
import users from '@data/users.json';

// Test suite: Login functionality
test.describe('Login Tests', () => {
  // Test case: Verify login functionality with page object model
  test('should login successfully with valid credentials', async ({ loginPage, homePage }) => {
    // Get username from environment variable, fallback to test data
    const username = getEnvVar('USERNAME') || users.default.username;
    // Get password from environment variable, fallback to test data
    const password = getEnvVar('PASSWORD') || users.default.password;

    // Perform login using the LoginPage page object method
    await loginPage.login(username, password);
    // Verify navigation to home page after successful login
    await homePage.assertUrlContains('/');
  });

  // Add more login tests here
  // Example: test('should show error with invalid credentials', async ({ loginPage }) => { ... });
});

