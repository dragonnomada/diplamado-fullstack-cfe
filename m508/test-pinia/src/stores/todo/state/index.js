import { ref, computed } from "vue"

export const todos = ref([])
export const selectedTodo = ref(null)
export const checkedTodos = computed(() => todos.value.filter(todo => todo.checked))