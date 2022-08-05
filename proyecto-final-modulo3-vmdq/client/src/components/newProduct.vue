<script setup>
import { ref, inject,defineProps ,provide } from "vue"

const name = ref("")
const price = ref(0)

const product = inject("products/@postNew")



</script>

<template>
    <div class="container rounded bg-white mt-5">
        <div class="row">
           
            <div class="col-md-12">
                
                <div class="p-3 py-5">              
                    <div class="row mt-4">
                        <h3>Agregar nuevo producto</h3>
                        <div class="col-md-8"><input type="text" class="form-control" placeholder="Producto" v-model="name"></div>
                       
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-8"><input type="text" class="form-control" placeholder="Precio" v-model="price"></div>
                          </div>
                   
                    <div class="mt-5 text-center"><button @click="product(name, price)" class="btn btn-primary profile-button" type="button">Agregar</button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
  background: #BA68C8;
}

.form-control:focus {
  box-shadow: none;
  border-color: #BA68C8;
}

.profile-button {
  background: #BA68C8;
  box-shadow: none;
  border: none;
}

.profile-button:hover {
  background: #682773;
}

.profile-button:focus {
  background: #682773;
  box-shadow: none;
}

.profile-button:active {
  background: #682773;
  box-shadow: none;
}

.back:hover {
  color: #682773;
  cursor: pointer;
}
</style>