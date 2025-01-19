import { By, PageElement } from "@serenity-js/web";

export const SiigoHomePage = {
        inicioLabel: () =>
        PageElement.located(
            By.xpath("//div[@class='menu-tab-title-label mr-10']")
        ).describedAs("label inicio"),

        crearButton: () =>
        PageElement.located(
            By.deepCss('siigo-header-molecule [data-id="header-create-button"]')
        ).describedAs('botón de crear'),

        clientesButton: () =>
        PageElement.located(
            By.deepCss('siigo-header-molecule [data-value="Clientes"][href="javascript:;"]')
        ).describedAs('botón de clientes'),
};