import {test, expect} from "@playwright/test";

test("landing page has title, logo and button options", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(page).toHaveTitle(/Bubble/);

    let logo = page.getByRole('img', { name: 'Logo' })
    await expect(logo).toBeVisible();
    let breathing = page.getByRole('button', { name: 'Bubble Breathing' })
    await expect(breathing).toBeVisible();
    let recordMood = page.getByRole('button', { name: 'Record Your Mood' })
    await expect(recordMood).toBeVisible();
    let earlierLogs = page.getByRole('button', { name: 'Earlier Logs' })  
    await expect(earlierLogs).toBeVisible();
    let parentZone = page.getByRole('button', { name: 'Parent Zone' })
    await expect(parentZone).toBeVisible();
    let footer = page.locator('div').filter({ hasText: '© Team 11 Ltd. Fostering' }).first()
    await expect(footer).toBeVisible();
});