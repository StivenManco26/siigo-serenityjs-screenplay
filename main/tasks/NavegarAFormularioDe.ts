import { Ensure, equals } from "@serenity-js/assertions";
import { Duration, Task, Wait } from "@serenity-js/core";
import { Click } from "@serenity-js/web";
import { SiigoCrearClientePage } from "main/ui/SiigoCrearClientePage.ts";
import { SiigoHomePage } from "main/ui/SiigoHomePage.ts";

export class NavegarAFormularioDe {
  public static readonly creacionDeCliente = () =>
    Task.where(
      `#actor navega hacia el formulario de creación de cliente de Siigo`,
      Click.on(SiigoHomePage.crearButton()),
      Click.on(SiigoHomePage.clientesButton()),
      Wait.for(Duration.ofSeconds(5)),
      Ensure.that(SiigoCrearClientePage.crearClienteLabel().text(), equals("Crear un tercero"))
    );
}
