import state from "./state/test1"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

export default {
    namespaced: true,
    state() {
        return state
    },
    getters,
    mutations,
    actions
}