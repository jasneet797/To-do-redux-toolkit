import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'
function Todos(){
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
    return(
        <>
        <div>Todos</div>
        {todos.map((todo)=>(
            <li key={todo.id} className="flex justify-between items-center py-2 px-4 border-b border-gray-300">
                <span  className="text-gray-900">{todo.text}</span>
                <button onClick={()=>dispatch(removeTodo(todo.id))}      className="text-white bg-indigo-500 border-0 py-1 px-4 ml-4 focus:outline-none hover:bg-indigo-600 rounded text-sm"
                >delete</button>
            </li>
        ))}
        </>
    )
}
export default Todos