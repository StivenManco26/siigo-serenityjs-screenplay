Feature: crear cliente

    Background: Login en siigo
        Given Stiven se encuentra en la web de siigo
        When ingresa el usuario "retoautomationsiigo@yopmail.com" y la contrasena "T4b4ck0ff1c3P455w0rd658*"
        Then debe visualizar la pagina de inicio de siigo

    Scenario: Crear cliente correctamente
        Given Stiven se encuentra en la pagina de inicio de siigo
        When se dirige al formulario de creacion de cliente
        And ingresa la informacion del cliente
        And guarda el cliente
        Then debe visualizar el mensaje "Cliente creado correctamente"