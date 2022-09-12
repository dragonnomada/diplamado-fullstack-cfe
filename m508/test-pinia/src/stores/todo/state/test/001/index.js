import { ref, computed } from "vue"

export const todos = ref([])
export const selectedTodo = ref(null)
export const checkedTodos = computed(() => todos.value.filter(todo => todo.checked))

(() => {
    console.log("Test STORE/PRODUCTS/001")
    
    for (let i = 0; i < 1000; i++) {
        const todo = {
            id: i + 1,
            title: `Prueba ${`0000${i}`.slice(-4)}0`,
            checked: Math.random() >= 0.2
        }
        todos.value.push(todo)
    }

    selectedTodo.value = todos.value[343]
})()