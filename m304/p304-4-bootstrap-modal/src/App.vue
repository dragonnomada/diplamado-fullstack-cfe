<script setup>

import { onMounted, ref } from 'vue'

const modal = ref(null)

onMounted(() => {
  modal.value = new bootstrap.Modal("#exampleModal")
})

function abrirModal() {
  modal.value.show()
}

function cerrarModal() {
  modal.value.hide()
}

</script>

<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>

  <div class="btn btn-danger" @click="abrirModal()"><i class="fa-solid fa-compass"></i></div>

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <button class="btn btn-warning" @click="cerrarModal()">Cerrar Modal programado</button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>