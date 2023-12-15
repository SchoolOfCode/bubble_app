import { test, expect } from "@playwright/test";

test("landing page has title, logo and button options", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle(/Bubble/);

  let logo = page.getByRole("img", { name: "Logo" });
  await expect(logo).toBeVisible();
  let breathing = page.getByRole("button", { name: "Bubble Breathing" });
  await expect(breathing).toBeVisible();
  let recordMood = page.getByRole("button", { name: "Record Your Mood" });
  await expect(recordMood).toBeVisible();
  let earlierLogs = page.getByRole("button", { name: "Earlier Logs" });
  await expect(earlierLogs).toBeVisible();
  let parentZone = page.getByRole("button", { name: "Parent Zone" });
  await expect(parentZone).toBeVisible();
  let footer = page
    .locator("div")
    .filter({ hasText: "© Team 11 Ltd. Fostering" })
    .first();
  await expect(footer).toBeVisible();
});

test("Rob's user journey", async ({ page }) => {
  await page.goto("http://localhost:3000");

  let recordMood = page.getByRole("button", { name: "Record Your Mood" });
  await expect(recordMood).toBeVisible();
  await recordMood.click();
  await page.goto("http://localhost:3000/emojis");
  await expect(page).toHaveURL("http://localhost:3000/emojis");
  let headingEmoji = page.getByRole("heading", {
    name: "How are you feeling?",
  });
  await expect(headingEmoji).toHaveText(/How are you feeling?/);
  let emojiHappy = page.getByRole("link", { name: "Happy-Emoji" });
  await expect(emojiHappy).toBeVisible();
  let emojiSad = page.getByRole("link", { name: "Sad-Emoji" });
  await expect(emojiSad).toBeVisible();
  let emojiCheeky = page.getByRole("link", { name: "Cheeky-Emoji" });
  await expect(emojiCheeky).toBeVisible();
  let emojiAngry = page.getByRole("link", { name: "Angry-Emoji" });
  await expect(emojiAngry).toBeVisible();
  let emojiWorried = page.getByRole("link", { name: "Worried-Emoji" });
  await expect(emojiWorried).toBeVisible();
  let emojiTired = page.getByRole("link", { name: "Tired-Emoji" });
  await expect(emojiTired).toBeVisible();
  await emojiHappy.click();
  await page.goto("http://localhost:3000/emotionrater");
  await expect(page).toHaveURL("http://localhost:3000/emotionrater");
  let headingRater = page.getByRole("heading", {
    name: "Let's dive deeper...",
  });
  await expect(headingRater).toHaveText(/Let\'s dive deeper.../);
});
