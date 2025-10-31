// Import custom test fixture with page object fixtures
import { test, expect } from '@fixtures/test';

// Test suite: New Site page functionality
test.describe('New Site Page Tests', () => {
  // Test case: Verify new site page loads
  test('should open new site page successfully', async ({ newSitePage }) => {
    // Navigate to the new site page using page object method
    await newSitePage.open();
    // Verify the URL contains the new site path
    await newSitePage.assertUrlContains('/new-site');
  });

  // Add more new site page tests here
  // Example: test('should create a new site', async ({ newSitePage }) => { ... });
});

