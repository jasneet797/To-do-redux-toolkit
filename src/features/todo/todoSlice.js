import {createSlice,nanoid} from '@reduxjs/toolkit';
const initialState={
    todos:[{id:1,text:"hello world"}]
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
                todos:[{
                    // id:Date.now(),
                    id:nanoid(),
                    text:action.payload.text}]
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo.id !== action.payload))
        },
    }
    })
export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer
 