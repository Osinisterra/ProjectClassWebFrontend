<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 10px;
}

body {
  justify-content: center;
  height: 100vh; /* Hace que ocupe toda la altura de la ventana */
  background-image: url('/fondo2.png'); /* Cambia a la ruta de tu imagen */
  background-size: cover; /* Ajusta la imagen para cubrir todo el contenedor */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
}
</style>
