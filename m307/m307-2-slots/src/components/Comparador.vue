<template>
    <div class="cont">
        <div class="izq">
            <slot name="izquierda"></slot>
        </div>
        <div class="der">
            <slot name="derecha"></slot>
        </div>
    </div>
</template>

<style scoped>
.cont {
    display: flex;
    flex-direction: row;
}

.izq {
    padding: 20px;
    border: 1px solid hotpink;
}

.der {
    padding: 20px;
    border: 1px solid cornflowerblue;
}
</style>