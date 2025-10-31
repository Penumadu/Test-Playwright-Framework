// Import the base page class to inherit common functionality
import { BasePage } from './base.page';

/**
 * AdminPage - Page Object Model for the admin page
 * Extends BasePage to inherit common page interaction methods
 */
export class AdminPage extends BasePage {
  /**
   * Navigates to the admin page
   */
  async open(): Promise<void> {
    // Navigate to admin page (relative to baseURL)
    await this.goto('/admin');
  }

  // Add admin-specific methods here
  // Example: async manageUsers() { ... }
}

