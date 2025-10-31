// Import the base page class to inherit common functionality
import { BasePage } from './base.page';

/**
 * LoginPage - Page Object Model for the login page
 * Extends BasePage to inherit common page interaction methods
 */
export class LoginPage extends BasePage {
  /**
   * Performs login action with provided credentials
   * @param username - User's username or email
   * @param password - User's password
   */
  async login(username: string, password: string): Promise<void> {
    // Navigate to the login page (relative to baseURL)
    await this.page.goto('/login');
    // Fill in the username input field using name attribute selector
    await this.page.fill('input[name="username"]', username);
    // Fill in the password input field using name attribute selector
    await this.page.fill('input[name="password"]', password);
    // Click the submit button to initiate login
    await this.page.click('button[type="submit"]');
    // Wait for network to be idle (all requests completed)
    // Ensures login process is fully complete before proceeding
    await this.page.waitForLoadState('networkidle');
  }
}

