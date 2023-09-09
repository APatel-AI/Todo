import React, {useState, useEffect} from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from "./Todo";
const style ={
  bg: `h-screen w-screen p-4 bg-[#1B1B1B]`, 
  container: `bg-transparent max-w-[500px] w-full m-auto rounded-md shadow-xl p-4 `, 
  heading: `text-3xl text-white font-normal text-center text-gray-800 p-2`,
  form: `flex justify-between text-xl`, 
  input: `border p-2 w-full text-xl font-mono rounded`,
  button: `hover:bg-black  p-4 ml-2 bg-transparent text-white`, 
  count: `text-center p-2 text-white  text-xl font-normal` , 
 
}
function App() {
  const [todos, setTodos] = useState(['Learn React', "Practice LeetCode"]); 
  return (
    <div className={style.bg}>

    <div className={style.container}>
      <h3 className={style.heading}>Todo App</h3>
      <form className={style.form}>
        <input className={style.input} type="text" placeholder="Add Todo"/>

        <button className={style.button} ><AiOutlinePlus size={30}/>
      </button>
      </form>

      <ul>
        {todos.map((todo, index)=> (
           <Todo key={index} todo={todo} />
        ))}
    

      </ul>

      <p className={style.count}>You Have 2 Todos</p>

    </div>
    </div>
  );
}

export default App;
