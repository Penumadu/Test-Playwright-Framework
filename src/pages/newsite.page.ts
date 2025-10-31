// Import the base page class to inherit common functionality
import { BasePage } from './base.page';

/**
 * NewSitePage - Page Object Model for the new site page
 * Extends BasePage to inherit common page interaction methods
 */
export class NewSitePage extends BasePage {
  /**
   * Navigates to the new site creation page
   */
  async open(): Promise<void> {
    // Navigate to new site page (relative to baseURL)
    await this.goto('/new-site');
  }

  // Add new site-specific methods here
  // Example: async createSite(siteData: SiteData) { ... }
}

