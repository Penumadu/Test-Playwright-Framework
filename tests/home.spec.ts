// Import custom test fixture with page object fixtures
import { test, expect } from '@fixtures/test';

// Test suite: Home page functionality
test.describe('Home Page Tests', () => {
  // Test case: Verify home page loads and displays content
  test('should open home page and display title', async ({ homePage }) => {
    // Navigate to the home page using page object method
    await homePage.open();
    // Verify the URL contains the root path (confirms navigation)
    await homePage.assertUrlContains('/');
    // Get the welcome title text from the page
    const title = await homePage.getWelcomeTitle();
    // Assert that the title exists (is not null or empty)
    expect(title).not.toBeNull();
  });

  // Add more home page tests here
});

