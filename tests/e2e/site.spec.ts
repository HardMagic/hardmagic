import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = [
  '/', '/products/', '/products/wiremark/', '/products/studio/', '/products/cli/', '/products/web-magic/', '/products/photo-curator/', '/products/gpu-router/',
  '/services/', '/services/creative-direction/', '/engagements/fractional-creative-office/', '/industries/media-entertainment/', '/methods/human-agent-creative-loop/',
  '/insights/creative-direction-after-model-abundance/', '/briefs/', '/briefs/generative-media-operating-system/', '/briefs/generative-media-operating-system/thanks/',
  '/company/', '/company/history/', '/contact/', '/contact/genai/', '/responsible-ai/', '/privacy/', '/sitemap/',
];
for (const route of routes) {
  test(`${route} renders without automated accessibility defects`, async ({ page }, testInfo) => {
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator('h1')).toBeVisible();
    await expect(page).toHaveTitle(/HardMagic/);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
    if (['/', '/services/creative-direction/', '/briefs/generative-media-operating-system/'].includes(route)) {
      const name = route === '/' ? 'home' : route.split('/').filter(Boolean).at(-1);
      await page.screenshot({ path: `screenshots/${testInfo.project.name}/${name}.png`, fullPage: true });
    }
  });
}

test('mega menu exposes deep navigation and behaves as one disclosure at a time', async ({ page }, testInfo) => {
  await page.goto('/');
  const menus = page.locator('.mega-item');
  await menus.nth(0).locator('summary').click();
  await expect(menus.nth(0)).toHaveAttribute('open', '');
  await expect(page.getByRole('link', { name: 'Source intelligence' })).toBeVisible();
  if (testInfo.project.name === 'desktop') {
    await menus.nth(1).locator('summary').click();
    await expect(menus.nth(0)).not.toHaveAttribute('open', '');
    await expect(menus.nth(1)).toHaveAttribute('open', '');
  } else {
    await page.keyboard.press('Escape');
    await expect(menus.nth(0)).not.toHaveAttribute('open', '');
  }
});
