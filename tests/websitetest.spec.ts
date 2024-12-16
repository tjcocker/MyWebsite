import { test, expect } from '@playwright/test';
import { CityData } from '../tests/data/cities.json'
  // Load citydata
for (const [city, cities] of Object.entries(CityData)) {
  // Interate through list of cities and assert on each
  test(`Weather app test for ${cities}`, async ({ page }) => {
    await page.goto('http://tim-cockerham.com/');
    await expect(page.locator('h1')).toContainText('Welcome');
    await page.getByPlaceholder('Enter city name').click();
    await page.getByPlaceholder('Enter city name').fill(cities);
    await page.getByRole('button', { name: 'Get Weather' }).click();
    await expect(page.locator('#city-name')).toContainText(cities);
  });
}
