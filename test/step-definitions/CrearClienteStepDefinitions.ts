import { Given, Then, When, setDefaultTimeout } from "@cucumber/cucumber";
import { Actor, actorInTheSpotlight } from "@serenity-js/core";
import { Navigate } from "@serenity-js/web";
import { VisualizarPaginaInicio } from "main/questions/VisualizarPaginaInicio.ts";
import { LoguearseEnSiigo } from "main/tasks/LoguearseEnSiigo.ts";
import { NavegarAFormularioDe } from "main/tasks/NavegarAFormularioDe.ts";

setDefaultTimeout(60 * 1000);

Given("{actor} se encuentra en la web de siigo", async (actor: Actor) => {
  await actor.attemptsTo(Navigate.to("https://qastaging.siigo.com/#/login"));
});

When(
  "ingresa el usuario {string} y la contrasena {string}",
  async (usuario: string, contrasena: string) => {
    await actorInTheSpotlight().attemptsTo(
      LoguearseEnSiigo.conSusCredenciales(usuario, contrasena)
    );
  }
);

Then("debe visualizar la pagina de inicio de siigo", async () => {
  await actorInTheSpotlight().attemptsTo(VisualizarPaginaInicio.deSiigo());
});

When("{actor} se dirige al formulario de creacion de cliente",async (actor: Actor) => {
    await actor.attemptsTo(
        NavegarAFormularioDe.creacionDeCliente()
      );
});

When("ingresa la informacion del cliente",async () => {
  
});

When("guarda el cliente", async () => {
  
});

Then("debe visualizar el mensaje {string}", async (mensaje: string) => {
  
});
