import { todos } from "../state"

export function addTodo(title, checked) {
    todos.value.push({
        id: Math.random().toString(16),
        title,
        checked,
        createAt: new Date()
    })
}

export function checkTodo(id) {
    const [todo] = todos.value.filter(todo => todo.id === id)

    if (todo) {
        todo.checked = true
    }
}

export function uncheckTodo(id) {
    const [todo] = todos.value.filter(todo => todo.id === id)

    if (todo) {
        todo.checked = false
    }
}