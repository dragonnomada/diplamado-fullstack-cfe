import { defineStore } from "pinia"

import { todos, selectedTodo, checkedTodos } from "./state"
import { addTodo, checkTodo, uncheckTodo } from "./actions"

export const useTodo = defineStore(() => {
    return {
        todos,
        selectedTodo,
        checkedTodos,
        addTodo,
        checkTodo,
        uncheckTodo
    }
})