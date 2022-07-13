<template>
  <div>
    <Comparador>
      <template v-slot:izquierda>
        <img src="https://placekitten.com/100">
        <p>Miki</p>
      </template>
      <template v-slot:derecha>
        <img src="https://placekitten.com/120">
        <p>Riki</p>
      </template>
    </Comparador>

    <TarjetaEmpleado>
      <input type="text" placeholder="Mensaje para el empleado">
      <button>Enviar</button>
    </TarjetaEmpleado>
    <TarjetaEmpleado>
      <div>
        <template v-for="medalla in [1, 2, 3]">
          <span>Premio {{medalla}}</span>
        </template>
      </div>
    </TarjetaEmpleado>

    <TarjetaEmpleado>
      <IniciarSesion></IniciarSesion>
    </TarjetaEmpleado>
  </div>
</template>

<script setup>
import TarjetaEmpleado from "./components/TarjetaEmpleado.vue"
import IniciarSesion from "./components/IniciarSesion.vue"
import Comparador from "./components/Comparador.vue"
</script>