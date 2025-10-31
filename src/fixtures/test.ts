// Import base test function and expect assertion from Playwright
// Import Page Object Models for use in fixtures
import { test as base, expect } from '@playwright/test';
import { AdminPage } from '@pages/admin.page';
import { ClustersPage } from '@pages/clusters.page';
import { DomainPage } from '@pages/domain.page';
import { HomePage } from '@pages/home.page';
import { LoginPage } from '@pages/login.page';
import { MembersPage } from '@pages/members.page';
import { MinistryPage } from '@pages/ministry.page';
import { NewSitePage } from '@pages/newsite.page';
import { ReportPage } from '@pages/report.page';
import { SiteDetailsPage } from '@pages/sitedetails.page';

// TypeScript type definition for custom fixtures
// Ensures type safety when using fixtures in tests
type Pages = {
  adminPage: AdminPage;
  clustersPage: ClustersPage;
  domainPage: DomainPage;
  homePage: HomePage;
  loginPage: LoginPage;
  membersPage: MembersPage;
  ministryPage: MinistryPage;
  newSitePage: NewSitePage;
  reportPage: ReportPage;
  siteDetailsPage: SiteDetailsPage;
};

// Extend the base Playwright test with custom fixtures
// This allows tests to access page objects directly without manual instantiation
export const test = base.extend<Pages>({
  // Fixture: Creates an AdminPage instance for each test
  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },
  // Fixture: Creates a ClustersPage instance for each test
  clustersPage: async ({ page }, use) => {
    await use(new ClustersPage(page));
  },
  // Fixture: Creates a DomainPage instance for each test
  domainPage: async ({ page }, use) => {
    await use(new DomainPage(page));
  },
  // Fixture: Creates a HomePage instance for each test
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  // Fixture: Creates a LoginPage instance for each test
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  // Fixture: Creates a MembersPage instance for each test
  membersPage: async ({ page }, use) => {
    await use(new MembersPage(page));
  },
  // Fixture: Creates a MinistryPage instance for each test
  ministryPage: async ({ page }, use) => {
    await use(new MinistryPage(page));
  },
  // Fixture: Creates a NewSitePage instance for each test
  newSitePage: async ({ page }, use) => {
    await use(new NewSitePage(page));
  },
  // Fixture: Creates a ReportPage instance for each test
  reportPage: async ({ page }, use) => {
    await use(new ReportPage(page));
  },
  // Fixture: Creates a SiteDetailsPage instance for each test
  siteDetailsPage: async ({ page }, use) => {
    await use(new SiteDetailsPage(page));
  }
});

// Re-export expect for convenient use in test files
export { expect };



