import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/my-app/);
});

test('has heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('Get started');
});

test('counter increments on click', async ({ page }) => {
  await page.goto('/');
  const counter = page.locator('#counter');
  await expect(counter).toContainText('Count is 0');
  await counter.click();
  await expect(counter).toContainText('Count is 1');
  await counter.click();
  await expect(counter).toContainText('Count is 2');
});

test('hero images are visible', async ({ page }) => {
  await page.goto('/');
  const images = page.locator('.hero img');
  await expect(images).toHaveCount(3);
  for (const img of await images.all()) {
    await expect(img).toBeVisible();
  }
});

test('has HMR paragraph with code tags', async ({ page }) => {
  await page.goto('/');
  const paragraph = page.locator('#center p');
  await expect(paragraph).toContainText('Edit src/main.js and save to test HMR');
  await expect(page.locator('#center code')).toHaveCount(2);
});
