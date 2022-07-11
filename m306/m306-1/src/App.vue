<!-- Option API -->
<script>
import HelloOptionApi from "./componentes/HelloOptionApi.vue";

export default {
    components: {
        HelloOptionApi: HelloOptionApi
    }
}
</script>

<template>
    <div>
        <div>
            <HelloOptionApi></HelloOptionApi>
            <HelloOptionApi></HelloOptionApi>
        </div>
        <div>
            <h2>B</h2>
            <hello-option-api></hello-option-api>
        </div>
        <div>
            <h3>C</h3>
            <HelloOptionApi></HelloOptionApi>
        </div>
    </div>
</template>