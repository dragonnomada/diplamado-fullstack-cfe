<template>
    <div class="tarjeta">
        <div class="info">
            <div class="avatar">
                <img src="https://place-hold.it/100" alt="Foto del Empleado">
            </div>
            <div class="data">
                <div class="title">
                    <h1>Nombre del Empleado</h1>
                </div>
                <div class="subtitle">
                    <h2>Datos del Empleado</h2>
                </div>
            </div>
        </div>
        <div class="region">
            <!-- CONTENEDOR: COMPONENTE EXTERNO SE PUEDE PONER AQUÍ -->
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.tarjeta {
    border: 1px solid gray;
    padding: 20px;
}
.info {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.avatar > img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 10px;
}

.data {
    padding: 0px 10px;
}

.region {
    border: 1px solid red;
    padding: 20px;
}
</style>

