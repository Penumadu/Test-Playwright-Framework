// Import custom test fixture with page object fixtures
import { test, expect } from '@fixtures/test';

// Test suite: Clusters page functionality
test.describe('Clusters Page Tests', () => {
  // Test case: Verify clusters page loads
  test('should open clusters page successfully', async ({ clustersPage }) => {
    // Navigate to the clusters page using page object method
    await clustersPage.open();
    // Verify the URL contains the clusters path
    await clustersPage.assertUrlContains('/clusters');
  });

  // Add more clusters page tests here
  // Example: test('should create a new cluster', async ({ clustersPage }) => { ... });
});

