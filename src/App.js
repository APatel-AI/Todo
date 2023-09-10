import React, {useState, useEffect, useContext} from "react";
import {AiOutlinePlus} from "react-icons/ai"; 
import Todo from "./Todo";
import { collection, onSnapshot, query, updateDoc, doc, addDoc, deleteDoc} from "firebase/firestore";

import { db } from "./firebase";
import { UserAuth } from "./context/AuthContext";
const style = {
  bg: `h-screen w-screen p-4 bg-[#1B1B1B]`, 
  container: `bg-transparent max-w-[500px] w-full m-auto rounded-md shadow-md shadow-white p-4 `, 
  heading: `text-3xl text-white font-[Lato] text-center text-gray-800 p-2`,
  form: `flex justify-between text-xl`, 
  input: `border p-2 w-full text-xl font-mono rounded`,
  button: `hover:bg-black  p-4 ml-2 bg-transparent text-white`, 
  count: `text-center p-2 text-white  text-xl font-normal` , 
 
}
function App() {
  const [todos, setTodos] = useState([]); 
  const [input, setInput] = useState([]);
const { user } = UserAuth()





  // create todo 
  const createTodo = async (e) => {
    e.preventDefault(e);
    if(input === ''){
      alert('Please enter a valid todo')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input, 
      completed: false, 

    })

    setInput('')
  }

  // read todo from firebase
  useEffect(()=>{
    const q = query(collection(db,'todos'))
    const unsubscribe = onSnapshot(q,(querySnapshot) => {
      let todosArr = []
      querySnapshot.forEach((doc) => {
        todosArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todosArr);
    })
    return () => unsubscribe();
  }, [])
  // updated todo

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }
  //delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  
  return (
    <>
    {user ? (
    <div className={style.bg}>
      <div className={style.container}>

      
          
      
        <h3 className={style.heading}>Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input value={input} onChange={(e) => setInput(e.target.value)} className={style.input} type="text" placeholder="Add Todo" />

          <button className={style.button}><AiOutlinePlus size={30} /></button>

        </form>

        <ul>
          {todos.map((todo, index) => (
               <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
          ))}
       
        </ul>
        {todos.length < 1 ? null :  <p className={style.count}>{`You have [ ${todos.length} ] todos`}</p>}


       

      </div>
     
    </div>

    ):(

    <div>NOPE</div>

    )}
    </>
  );
}

export default App;