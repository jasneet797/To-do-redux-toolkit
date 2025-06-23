import {createSlice,nanoid} from '@reduxjs/toolkit';
const initialState={
    todos:[{id:0,text:""}]
}
// function sayHello(){
//     console.log("HEllo there")
// }
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                // todos:[{
                    // id:Date.now(),
                    id:nanoid(),
                    text:action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
    }
    })
export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer
 