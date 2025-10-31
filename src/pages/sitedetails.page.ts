// Import the base page class to inherit common functionality
import { BasePage } from './base.page';

/**
 * SiteDetailsPage - Page Object Model for the site details page
 * Extends BasePage to inherit common page interaction methods
 */
export class SiteDetailsPage extends BasePage {
  /**
   * Navigates to the site details page for a specific site
   * @param siteId - The ID of the site to view details for
   */
  async open(siteId?: string): Promise<void> {
    // Navigate to site details page (relative to baseURL)
    if (siteId) {
      await this.goto(`/site-details/${siteId}`);
    } else {
      await this.goto('/site-details');
    }
  }

  // Add site details-specific methods here
  // Example: async updateSiteDetails(details: SiteDetails) { ... }
}

