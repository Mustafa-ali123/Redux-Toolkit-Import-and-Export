import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, task: "Hello world" }]
}

const todoSlice = createSlice({
    name: 'Todo',
    initialState,// initialState:initialState
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                task: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo, i) => todo.id !== action.payload)
        },
        
        editTodo: (state, action) => {
            state.todos.map((todo, i) => {
                if (todo.id == action.payload.index) {
                     state.todos[i].task = action.payload.text
                }
            })
        }
    }
})

export default todoSlice.reducer;
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;