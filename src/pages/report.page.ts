// Import the base page class to inherit common functionality
import { BasePage } from './base.page';

/**
 * ReportPage - Page Object Model for the report page
 * Extends BasePage to inherit common page interaction methods
 */
export class ReportPage extends BasePage {
  /**
   * Navigates to the report page
   */
  async open(): Promise<void> {
    // Navigate to report page (relative to baseURL)
    await this.goto('/report');
  }

  // Add report-specific methods here
  // Example: async generateReport(reportType: string) { ... }
}

