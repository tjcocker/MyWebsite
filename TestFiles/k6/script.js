import { browser } from 'k6/browser';
import { check } from 'k6';

export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
};

export default async function () {
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto('https://tim-cockerham.com');

    const header = await page.locator('h1').textContent();
    check(header, {
      header: (h) => h == 'Welcome to my Website',
    });
  } finally {
    await page.close();
  }
}