<template>
    <div>
        <input ref="titleInput" type="text" 
            v-model="currentTitle" 
            @keydown.enter="agregar()" />
            <!-- @keydown="if($event.key === 'Enter') agregar()" -->
        <button @click="agregar()">Agregar</button>
    </div>
    <ul>
        <li v-for="todo in todos">
            <input type="checkbox" v-model="todo.checked">
            <span>{{ todo.title }}</span>
        </li>
        <li v-if="todos.length === 0">
            <span><em>No hay elementos</em></span>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            todos: [],
            currentTitle: ""
        }
    },
    methods: {
        agregar() {
            if (this.currentTitle.trim()) {
                const todo = {
                    id: Math.random().toString(16),
                    title: this.currentTitle,
                    checked: false
                }
                this.todos.push(todo)
            }
            this.currentTitle = ""
            setTimeout(() => {
                this.$refs.titleInput.focus()
            }, 50)
        }
    },
}
</script>