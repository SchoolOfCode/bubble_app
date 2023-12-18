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

test("Rob's user journey - homepage", async ({ page }) => {
  await page.goto("http://localhost:3000");

  let recordMood = page.getByRole("button", { name: "Record Your Mood" });
  await expect(recordMood).toBeVisible();
  await recordMood.click();


  await page.goto("http://localhost:3000/emojis");
  await expect(page).toHaveURL("http://localhost:3000/emojis");
});

test("Rob's user journey - emoji page", async ({ page }) => {
  await page.goto("http://localhost:3000/emojis");

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
});

  test("Rob's user journey - emotion rater cards", async ({ page }) => {
    await page.goto("http://localhost:3000/emotionrater");
  let headingRater = page.getByRole("heading", {
    name: "Let's dive deeper...",
  });
  await expect(headingRater).toHaveText(/Let\'s dive deeper.../);

  const happyCard = page.getByRole('heading', { name: 'How happy do you feel?' })
  await expect(happyCard).toHaveText(/happy/);
  const sadCard = page.getByRole('heading', { name: 'How sad do you feel?' })
  await expect(sadCard).toHaveText(/sad/);
  const cheekyCard = page.getByRole('heading', { name: 'How cheeky do you feel?' })
  await expect(cheekyCard).toHaveText(/cheeky/);
  const angryCard = page.getByRole('heading', { name: 'How angry do you feel?' })
  await expect(angryCard).toHaveText(/angry/);
  const worriedCard = page.getByRole('heading', { name: 'How worried do you feel?' })
  await expect(worriedCard).toHaveText(/worried/);
  const tiredCard = page.getByRole('heading', { name: 'How tired do you feel?' })
  await expect(tiredCard).toHaveText(/tired/);
});

test("Rob's user journey - emotion card text", async ({ page }) => {
  await page.goto("http://localhost:3000/emotionrater");

const cardNotText = page.getByText('Not Happy')
await expect(cardNotText).toHaveText('Not Happy');
const cardVeryText = page.getByText('Very Happy')
await expect(cardVeryText).toHaveText('Very Happy');
});

test("Rob's user journey - emotion card bubbles", async ({ page }) => {
  await page.goto("http://localhost:3000/emotionrater");

const bubbleOne = page.locator('div').filter({ hasText: /^Not Cheeky12345Very Cheeky$/ }).getByRole('img').first()
await expect(bubbleOne).toBeVisible();
const bubbleTwo = page.locator('div').filter({ hasText: /^Not Cheeky12345Very Cheeky$/ }).getByRole('img').nth(1)
await expect(bubbleTwo).toBeVisible();
const bubbleThree = page.locator('div').filter({ hasText: /^Not Cheeky12345Very Cheeky$/ }).getByRole('img').nth(2)
await expect(bubbleThree).toBeVisible();
const bubbleFour = page.locator('div').filter({ hasText: /^Not Cheeky12345Very Cheeky$/ }).getByRole('img').nth(3)
await expect(bubbleFour).toBeVisible();
const bubbleFive = page.locator('div').filter({ hasText: /^Not Cheeky12345Very Cheeky$/ }).getByRole('img').nth(4)  
await expect(bubbleFive).toBeVisible();
});

