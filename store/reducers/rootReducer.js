import { createSlice } from '@reduxjs/toolkit'

const rootReducer = createSlice({
    name: 'rootReducer',
    initialState: { "a": "b" },
    reducers: {
        todoAdded(state, action) { //action
            state.n = "M"
        },
        todoToggled(state, action) { //action
            const todo = state.find(todo => todo.id === action.payload)
            todo.completed = !todo.completed
        }
    }
})

export const { todoAdded, todoToggled } = rootReducer.actions
export default rootReducer.reducer
