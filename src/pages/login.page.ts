// Import the base page class to inherit common functionality
import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

/**
 * LoginPage - Page Object Model for the login page
 * Extends BasePage to inherit common page interaction methods
 */
export class LoginPage extends BasePage {
  // Locators defined at the top for better maintainability
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    // Initialize locators using getByLabel for better accessibility
    this.usernameInput = this.page.getByLabel('email');
    this.passwordInput = this.page.getByLabel('password');
    this.submitButton = this.page.getByRole('button', { name: /submit|login|sign in/i });
  }

  /**
   * Performs login action with provided credentials
   * @param username - User's username or email
   * @param password - User's password
   */
  async login(username: string, password: string): Promise<void> {
    // Navigate to the login page with SSO disabled (relative to baseURL)
    await this.page.goto('/?sso=false');
    // Fill in the username input field using the locator
    await this.usernameInput.fill(username);
    // Fill in the password input field using the locator
    await this.passwordInput.fill(password);
    // Click the submit button to initiate login
    await this.submitButton.click();
    // Wait for network to be idle (all requests completed)
    // Ensures login process is fully complete before proceeding
    await this.page.waitForLoadState('networkidle');
  }
}

