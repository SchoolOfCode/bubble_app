import { Toast } from "@chakra-ui/react";
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

  const happyCard = page.getByRole("heading", {
    name: "How happy do you feel?",
  });
  await expect(happyCard).toHaveText(/happy/);
  const sadCard = page.getByRole("heading", { name: "How sad do you feel?" });
  await expect(sadCard).toHaveText(/sad/);
  const cheekyCard = page.getByRole("heading", {
    name: "How cheeky do you feel?",
  });
  await expect(cheekyCard).toHaveText(/cheeky/);
  const angryCard = page.getByRole("heading", {
    name: "How angry do you feel?",
  });
  await expect(angryCard).toHaveText(/angry/);
  const worriedCard = page.getByRole("heading", {
    name: "How worried do you feel?",
  });
  await expect(worriedCard).toHaveText(/worried/);
  const tiredCard = page.getByRole("heading", {
    name: "How tired do you feel?",
  });
  await expect(tiredCard).toHaveText(/tired/);
});

test("Rob's user journey - emotion card text", async ({ page }) => {
  await page.goto("http://localhost:3000/emotionrater");

  const cardNotText = page.getByText("Not Happy");
  await expect(cardNotText).toHaveText("Not Happy");
  const cardVeryText = page.getByText("Very Happy");
  await expect(cardVeryText).toHaveText("Very Happy");
});

test("Rob's user journey - emotion card bubbles", async ({ page }) => {
  await page.goto("http://localhost:3000/emotionrater");

  const bubbleOne = page
    .locator("div")
    .filter({ hasText: /^Not Cheeky12345Very Cheeky$/ })
    .getByRole("img")
    .first();
  await expect(bubbleOne).toBeVisible();
  const bubbleTwo = page
    .locator("div")
    .filter({ hasText: /^Not Cheeky12345Very Cheeky$/ })
    .getByRole("img")
    .nth(1);
  await expect(bubbleTwo).toBeVisible();
  const bubbleThree = page
    .locator("div")
    .filter({ hasText: /^Not Cheeky12345Very Cheeky$/ })
    .getByRole("img")
    .nth(2);
  await expect(bubbleThree).toBeVisible();
  const bubbleFour = page
    .locator("div")
    .filter({ hasText: /^Not Cheeky12345Very Cheeky$/ })
    .getByRole("img")
    .nth(3);
  await expect(bubbleFour).toBeVisible();
  const bubbleFive = page
    .locator("div")
    .filter({ hasText: /^Not Cheeky12345Very Cheeky$/ })
    .getByRole("img")
    .nth(4);
  await expect(bubbleFive).toBeVisible();
});

test("Rob's user journey - clicking bubbles on emotionrater page", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/emotionrater");

  const nextButton = page
    .locator("div")
    .filter({
      hasText:
        "Let's dive deeper...(rate your emotions - click on the bubbles)How happy do you",
    })
    .getByRole("button");
  await expect(nextButton).toBeVisible();
  await nextButton.click();
  const toastPopUp = page.getByRole("emphasis");
  await expect(toastPopUp).toHaveText(
    /Oops not all of them have been selected!/
  );
  //clicking 5 buttons
  await page.locator("div:nth-child(6) > .chakra-text").first().click();
  await page
    .locator(".css-bl9vji > .css-gg4vpm > div:nth-child(5) > .chakra-text")
    .click();
  await page
    .locator(".css-1bzsqmt > .css-gg4vpm > div:nth-child(3) > .chakra-text")
    .click();
  await page
    .locator(".css-1jm08q2 > .css-gg4vpm > div:nth-child(2) > .chakra-text")
    .click();
  await page
    .locator(".css-1nxdxdl > .css-gg4vpm > div:nth-child(3) > .chakra-text")
    .click();
  await page
    .locator(".css-1ijyrq9 > .css-gg4vpm > div:nth-child(4) > .chakra-text")
    .click();
  await nextButton.click();
  await page.goto("http://localhost:3000/reflection");
  await expect(page).toHaveURL("http://localhost:3000/reflection");
});

test("Rob's user journey - reflection page", async ({ page }) => {
  await page.goto("http://localhost:3000/reflection");
  const headingReflection = page.getByRole("heading", {
    name: "Now let's think about these",
  });
  await expect(headingReflection).toHaveText(/Now let\'s think about these/);
  const secondHeadingReflection = page.getByRole("heading", {
    name: "Write about why you're",
  });
  await expect(secondHeadingReflection).toHaveText(/Write about why you\'re/);
  const textBox = page
    .locator("div")
    .filter({ hasText: /^Please write in the space below:-$/ });
  await expect(textBox).toBeVisible();
  const placeholderText = page.getByPlaceholder("If you’re stuck, that’s okay");

  const finishButton = page.getByRole("button", { name: "Finish" });
  await expect(finishButton).toBeVisible();
  await finishButton.click();
  const toastPopUp = page.getByRole("emphasis");
  await expect(toastPopUp).toHaveText(/Oops, nothing has been filled/);
  const hasBorder = await div.evaluate(() => {
    const element = document.getByPlaceholder("If you’re stuck, that’s okay");

    const computedStyle = window.getComputedStyle(element);
    return computedStyle.getPropertyValue("3px solid red");
  });
  await expect(hasBorder).toBe(true);

  //  await expect(placeholderText).toHaveText("");
  //  await placeholderText.fill("I love Monday, it's my favourite day, and I love American spelling.");
  //   await expect(placeholderText).toHaveValue("I love Monday, it's my favourite day, and I love American spelling.");
});
