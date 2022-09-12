import { useRxState } from "vuse-rx"

import state from "./state"
import actions from "./actions"

export const useContador = (subscriber) => useRxState(state)(actions).subscribe(subscriber)

// store/useContador/index.js => import { useContador } from "./store/useContador"

// USE:
// 1. 
//      const contador = useContador()
// 2. 
//      const contador = useContador(state => ...)