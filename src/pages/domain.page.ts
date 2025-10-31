// Import the base page class to inherit common functionality
import { BasePage } from './base.page';

/**
 * DomainPage - Page Object Model for the domain page
 * Extends BasePage to inherit common page interaction methods
 */
export class DomainPage extends BasePage {
  /**
   * Navigates to the domain page
   */
  async open(): Promise<void> {
    // Navigate to domain page (relative to baseURL)
    await this.goto('/domain');
  }

  // Add domain-specific methods here
  // Example: async addDomain(domainName: string) { ... }
}

