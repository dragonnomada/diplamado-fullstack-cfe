# Tutorial Vue 304-2 - Modificar el Componente App.vue

## Archivo `index.html`

Es la plantilla HTML usada para generar la aplicación, en este archivo integraremos bootstrap, jquery, o algunas otras cosas que necesitemos como estilos principalmente.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
    <!-- Bootstrap CSS -->
    <!-- Fontawesome CSS -->
  </head>
  <body>
    <div id="app"></div>
    <!-- Bootstrap JS -->
    <script type="module" src="/src/main.js"></script>
    <!-- Google Analytics -->
  </body>
</html>
```

## Archivo `src/main.js`

El punto de lanzamiento de Vue y es usado para agregar librerías globales como Vue-Store, Lodash, etc. 

```js
import { createApp } from 'vue'
// TODO: Importar más librerías

import App from './App.vue'

const app = createApp(App) // Crea un componente de Vue usando App.vue

// Configurar las librerías para `app`

app.mount('#app') // Monta App.vue sobre <div id="app"></div>
```

## Archivo `src/App.vue`

El archivo que contiene el componente principal que podemos modificar para comenzar a diseñar nuestra aplicación.

```vue
<script setup>
    // ...
</script>

<template>
    <!-- ... -->
</template>

<style>
    /* ... */
</style>

<style scope>
    /* ... */
</style>
```