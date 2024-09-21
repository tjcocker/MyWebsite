import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('test', async ({ page }) => {
  await page.goto('http://tim-cockerham.com/');
  await expect(page.locator('h1')).toContainText('Welcome');
  await expect(page.getByRole('img', { name: 'me and my dog Tony' })).toBeVisible();
  await expect(page.locator('i')).toContainText('Take a look around. Also, check out my new Next.js app here:');
  await expect(page.locator('body')).toContainText('Testing');
  await page.getByPlaceholder('Enter city name').click();
  await page.getByPlaceholder('Enter city name').fill('Westminster');
  await page.getByRole('button', { name: 'Get Weather' }).click();
  await expect(page.locator('#city-name')).toContainText('Westminster');
  await page.getByRole('link', { name: 'Grocery List' }).click();
  await expect(page.getByRole('heading')).toContainText('grocery list');
  await page.getByPlaceholder('e.g. eggs').click();
  await page.getByPlaceholder('e.g. eggs').fill('Milk');
  await page.getByRole('button', { name: 'submit' }).click();
  await expect(page.getByRole('article')).toContainText('Milk');
  await page.getByRole('button', { name: 'clear items' }).click();
  await expect(page.getByRole('article')).toBeEmpty;
  await page.getByRole('link', { name: 'Return to Main Site' }).click();
  await expect(page.locator('h1')).toContainText('Welcome');
  await page.goto('https://tim-cockerham.com/rockpaperscissors.html');
  await expect(page.getByText('Round: 1 of')).toBeVisible();
  await page.getByRole('button', { name: 'Rock' }).click();
  await expect(page.getByText('Round: 1 of')).toBeVisible();
  await page.getByRole('link', { name: 'Return to Main Site' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page.getByRole('strong')).toContainText('Email Me');
});

