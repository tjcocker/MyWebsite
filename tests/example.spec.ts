import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tim-cockerham.com/');
  await page.getByRole('heading', { name: 'Hi, welcome to my site' }).click();
  await page.getByRole('heading', { name: 'Hi, welcome to my site' }).click();
  await page.getByRole('heading', { name: 'Tests' }).click();
  await expect(page.locator('body')).toContainText('Tests');
  await expect(page.locator('body')).toContainText('Playwright with TypeScript');
  await expect(page.getByRole('heading', { name: 'Weather App' })).toBeVisible();
  await expect(page.getByRole('strong')).toContainText('Email Me');
  await expect(page.getByRole('link', { name: '' })).toBeVisible();
  await page.getByRole('link', { name: 'Rock-Paper-Scissors' }).click();
  await expect(page.getByRole('heading')).toContainText('Rock-Paper-Scissors');
  await expect(page.getByRole('link', { name: 'Return to Main Site' })).toBeVisible();
  await page.getByRole('link', { name: 'Return to Main Site' }).click();
  await page.getByRole('link', { name: 'Grocery List' }).click();
  await expect(page.getByRole('heading', { name: 'grocery list' })).toBeVisible();
  await expect(page.getByRole('link')).toContainText('Return to Main Site');
  await page.getByRole('link', { name: 'Return to Main Site' }).click();
  await page.getByPlaceholder('Enter city name').click();
  await page.getByPlaceholder('Enter city name').fill('Colorado Springs');
  await page.getByRole('button', { name: 'Get Weather' }).click();
  await expect(page.locator('#city-name')).toContainText('Colorado Springs');
});