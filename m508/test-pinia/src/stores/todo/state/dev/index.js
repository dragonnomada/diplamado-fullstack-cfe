import { ref, computed } from "vue"

export const todos = ref([
    {
        id: 1,
        title: "Comprar chelas" // XD
    }
])
export const selectedTodo = ref(null)
export const checkedTodos = computed(() => todos.value.filter(todo => todo.checked))