# Proyecto de automatización web Siigo con SerenityJS - Cucumber - WDIO

## Objetivo

Este repositorio tiene como objetivo la automatización web del software contable y administrativo Siigo.

## Instalación

Para correr el proyecto localmente es necesario:
- Node.js, a Long-Term Support (LTS) release version 16 or later - [download](https://nodejs.org/en/)
- Java Runtime Environment (JRE) or a Java Development Kit (JDK) version 11 or later - [download](https://adoptopenjdk.net/)
- Chrome web browser - [download](https://www.google.co.uk/chrome/)

Para clonar el código ejecute el siguiente comando:
```
git clone https://github.com/StivenManco26/siigo-serenityjs-screenplay.git
```

Una vez clone el código ejecute el siguiente comando en el directorio donde clonó el proyecto:
```
npm install --legacy-peer-deps
```

## Ejecución Local

El proyecto proporciona varios scripts configurados [NPM scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) definidos en el [`package.json`](package.json)

Para correr el proyecto ejecute el siguiente comando:

```
npm run serenity 
```

Esto ejecuta todas las suite de pruebas y genera el reporte en la ruta ./target/site/serenity
