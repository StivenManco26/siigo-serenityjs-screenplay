import { By, PageElement } from "@serenity-js/web";

export const SiigoHomePage = {
  inicioLabel: () =>
    PageElement.located(
      By.xpath("//div[@class='menu-tab-title-label mr-10']")
    ).describedAs("label inicio"),
};
