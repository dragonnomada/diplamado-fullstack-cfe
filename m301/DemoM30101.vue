<script>
export default {
    data() {
        return {
            // TODO: Estado inicial para un Recibo de Pago
            /*
            Monto Total, Persona Recibe, 
            Cantidad, Fecha, Saldo Pendiente 
            */
            monto: 2000,
            cantidad: 1500,
            persona: "Bruno Díaz",
            concepto: "Pago de daños al batimovil",
        }
    },
    // Estados Virtuales
    computed: {
        fecha() {
            return new Date().toLocaleDateString()
        },
        saldo() {
            return this.monto - Number(this.cantidad)
        }
    }
}
</script>

<template>
    <h1>Recibo:</h1>
    <p>Monto: <strong>${{ monto }}</strong></p>
    <p>Recibí de ........ <strong>{{ persona }}</strong></p>
    <p>La cantidad de ........ <input v-model="cantidad"></p>
    <p>Por concepto de ........ <strong>{{ concepto }}</strong></p>
    <p>Fecha: <strong>{{ fecha }}</strong></p>
    <p>Saldo pendiente: <strong>${{ saldo }}</strong></p>
</template>