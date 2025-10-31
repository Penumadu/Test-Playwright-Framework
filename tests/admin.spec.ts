// Import custom test fixture with page object fixtures
import { test, expect } from '@fixtures/test';

// Test suite: Admin page functionality
test.describe('Admin Page Tests', () => {
  // Test case: Verify admin page loads
  test('should open admin page successfully', async ({ adminPage }) => {
    // Navigate to the admin page using page object method
    await adminPage.open();
    // Verify the URL contains the admin path
    await adminPage.assertUrlContains('/admin');
  });

  // Add more admin page tests here
  // Example: test('should manage users', async ({ adminPage }) => { ... });
});

