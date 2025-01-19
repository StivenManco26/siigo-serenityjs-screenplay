import { By, PageElement } from "@serenity-js/web";

export const SiigoCrearClientePage = {
    crearClienteLabel: () =>
    PageElement.located(
      By.xpath("//h2[.='Crear un tercero']")
    ).describedAs("label crear cliente")
};
