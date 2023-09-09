import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'
const Todo = ({todo}) => {
    const style = {
        li: `flex justify-between p-4 bg-transparent capitalize text-white font-serif hover:bg-[#023020]`,
    liComplete: `flex justify-between p-4 bg-slate-400`, 
    row: `flex`, 
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`
    }
  return (
    <li className={style.li}>
        <div className={style.row}>
            <input type='checkbox' />
            <p className='style.text'>{todo}</p>
        </div>

        <button>{<FaRegTrashAlt />} </button>

    </li>
  )
}

export default Todo
