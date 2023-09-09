import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'
const style ={
    li: `flex justify-between p-4 bg-transparent capitalize text-white font-serif hover:bg-[#023020]`,
    liComplete: `flex justify-between p-4 bg-slate-400`, 
    row: `flex`, 
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`
}
const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
   <li className={todo.completed ? style.liComplete : style.li}>
        <div className={style.row}>

            <input onChange= {() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''}/>
            <p onClick={() => toggleComplete(todo)} className={todo.completed ? style.textComplete : style.text }>{todo.text}</p>
        </div>

        <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt/>}</button>

    
   </li>
  )
}

export default Todo