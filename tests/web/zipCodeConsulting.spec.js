import { test, expect } from "@playwright/test";
const { ConsultingPage } = require("../../src/pages/ConsultingPage");

test.describe("Zip Code Consulting", () => {
  let consulting;

  test.beforeEach(async ({ page, context }) => {
    consulting = new ConsultingPage(page, context);
    await page.goto("");
    await expect(page).toHaveURL("https://www.correios.com.br");
  });

  test("Should display the city of jardinópolis in the location", async ({}) => {
    await consulting.searchZipCode("14680-000");
    await expect(
      await consulting.resultPage('//td[.="Jardinópolis/SP"]')
    ).toContainText("Jardinópolis/SP");
  });

  test("Should display the city of Brodowski in the location", async ({}) => {
    await consulting.searchZipCode("14340-000");
    await expect(
      await consulting.resultPage('//td[.="Brodowski/SP"]')
    ).toContainText("Brodowski/SP");
  });

  test("Should display the city of Altinópolis in the location", async ({}) => {
    await consulting.searchZipCode("14350-000");
    await expect(
      await consulting.resultPage('//td[.="Altinópolis/SP"]')
    ).toContainText("Altinópolis/SP");
  });
});
