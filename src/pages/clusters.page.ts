// Import the base page class to inherit common functionality
import { BasePage } from './base.page';

/**
 * ClustersPage - Page Object Model for the clusters page
 * Extends BasePage to inherit common page interaction methods
 */
export class ClustersPage extends BasePage {
  /**
   * Navigates to the clusters page
   */
  async open(): Promise<void> {
    // Navigate to clusters page (relative to baseURL)
    await this.goto('/clusters');
  }

  // Add clusters-specific methods here
  // Example: async createCluster(name: string) { ... }
}

