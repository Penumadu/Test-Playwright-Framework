// Import Playwright types and utilities for page interactions
import { Page, Locator, expect } from '@playwright/test';

/**
 * BasePage - Abstract base class for all page objects
 * Provides common functionality that all page objects inherit
 */
export class BasePage {
  // Protected property to hold the Playwright Page instance
  // readonly ensures it cannot be reassigned after initialization
  protected readonly page: Page;

  // Constructor receives a Page instance and stores it for use in child classes
  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to a specific path on the application
  // Uses the baseURL from playwright.config.ts if path is relative
  async goto(path: string): Promise<void> {
    await this.page.goto(path);
  }

  // Helper method to create a locator for any selector
  // Returns a Playwright Locator object for element interactions
  locator(selector: string): Locator {
    return this.page.locator(selector);
  }

  // Assert that the current URL contains the specified part
  // Uses regex pattern matching for flexible URL validation
  async assertUrlContains(part: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(part));
  }
}

