// Import the base page class to inherit common functionality
import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * HomePage - Page Object Model for the home/landing page
 * Extends BasePage to inherit common page interaction methods
 */
export class HomePage extends BasePage {
  // Locators defined at the top for better maintainability
  private readonly welcomeTitle: Locator;

  constructor(page: Page) {
    super(page);
    // Initialize locators
    this.welcomeTitle = this.page.locator('h1').first();
  }

  /**
   * Opens the home page by navigating to the root path
   */
  async open(): Promise<void> {
    // Navigate to root path (/) using inherited goto method
    await this.goto('/');
  }

  /**
   * Retrieves the text content of the first h1 element
   * @returns Promise resolving to the title text or null if not found
   */
  async getWelcomeTitle(): Promise<string | null> {
    // Use the locator to get text content
    return this.welcomeTitle.textContent();
  }
}

