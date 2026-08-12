import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = ['/','/products/','/products/wiremark/','/products/studio/','/products/cli/','/products/web-magic/','/products/photo-curator/','/products/gpu-router/','/company/','/contact/','/privacy/'];
for (const route of routes) {
  test(`${route} renders without automated accessibility defects`, async ({ page }, testInfo) => {
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page).toHaveTitle(/HardMagic/);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
    if (route === '/') await page.screenshot({ path: `screenshots/${testInfo.project.name}/home.png`, fullPage: true });
  });
}
