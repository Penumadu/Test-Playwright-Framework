// Import the base page class to inherit common functionality
import { BasePage } from './base.page';

/**
 * MembersPage - Page Object Model for the members page
 * Extends BasePage to inherit common page interaction methods
 */
export class MembersPage extends BasePage {
  /**
   * Navigates to the members page
   */
  async open(): Promise<void> {
    // Navigate to members page (relative to baseURL)
    await this.goto('/members');
  }

  // Add members-specific methods here
  // Example: async addMember(memberData: MemberData) { ... }
}

