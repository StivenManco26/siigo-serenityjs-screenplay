import { By, PageElement } from "@serenity-js/web";

export const SiigoLoginPage = {
  usuarioInput: () =>
    PageElement.located(By.id("username-input")).describedAs("input usuario"),
  contrasenaInput: () =>
    PageElement.located(By.id("password-input")).describedAs(
      "input contrasena"
    ),
    ingresarButton: () =>
    PageElement.located(By.id("login-submit")).describedAs(
      "boton ingresar"
    ),
};
