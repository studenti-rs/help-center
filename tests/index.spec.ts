import { test, expect } from "@playwright/test";

test("it works", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Help Center | studenti.rs/);
});
