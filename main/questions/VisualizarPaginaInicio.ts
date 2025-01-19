import { Duration, Task, Wait } from "@serenity-js/core";
import { Ensure, equals } from "@serenity-js/assertions";
import { isVisible } from "@serenity-js/web";
import { SiigoHomePage } from "main/ui/SiigoHomePage";

export class VisualizarPaginaInicio {
  public static deSiigo = () =>
    Task.where(
      `#actor visualiza correctamente la palabra pagina de inicio`,
      Wait.upTo(Duration.ofSeconds(15)).until(
        SiigoHomePage.inicioLabel(),
        isVisible()
      ),
      Ensure.that(SiigoHomePage.inicioLabel().text(), equals("Inicio"))
    );
}
