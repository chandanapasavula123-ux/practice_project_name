import { test, expect } from '@playwright/test';

test('verify page title', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  // Store page title in a string variable
  const pageTitle: string = await page.title();

  // Print the page title
  console.log('Page Title:', pageTitle);

  // Verify the title
  await expect(page).toHaveTitle(/Playwright/);

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
//addedByme
