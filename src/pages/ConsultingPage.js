const {
  ConsultingPageElements,
} = require("../elements/ConsultingPageElements");
let consulting = new ConsultingPageElements();

exports.ConsultingPage = class ConsultingPage {
  constructor(page, context) {
    this.page = page;
    this.context = context;
  }

  async searchZipCode(zipCode) {
    await this.page.locator(consulting.element.researchField).fill(zipCode);
    await this.page.locator(consulting.element.buttonResearch).click();
  }

  async resultPage(locator) {
    const pagePromise = this.context.waitForEvent('page');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    return newPage.locator(locator);
  }
};
