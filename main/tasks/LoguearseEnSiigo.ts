import { Duration, Task, Wait } from "@serenity-js/core";
import { Click, Enter, isVisible } from "@serenity-js/web";
import { SiigoLoginPage } from "main/ui/SiigoLoginPage.ts";

export class LoguearseEnSiigo {
  public static readonly conSusCredenciales = (
    usuario: string,
    contrasena: string
  ) =>
    Task.where(
      `#actor ingresa las credenciales en la pagina de inicio de Siigo`,
      Wait.upTo(Duration.ofSeconds(15)).until(SiigoLoginPage.usuarioInput(), isVisible()),
      Enter.theValue(usuario).into(SiigoLoginPage.usuarioInput()),
      Enter.theValue(contrasena).into(SiigoLoginPage.contrasenaInput()),
      Click.on(SiigoLoginPage.ingresarButton())
    );
}
