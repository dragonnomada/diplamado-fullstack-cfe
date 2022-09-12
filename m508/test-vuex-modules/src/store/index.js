import { createStore } from "vuex"

import contador from "./modules/contador"
// import usuarios from "./modules/usuarios"
import productos from "./modules/productos"

export default createStore({
    modules: {
        contador,
        // usuarios,
        productos
    }
})