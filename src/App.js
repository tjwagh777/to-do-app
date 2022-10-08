import Input from "./Components/Input";
import Box from "./Components/Box";
import { useState } from "react";

function App() {
  const [todos,setToDo] = useState([]);
   
  const removeToDo = (id) => {
     //console.log(id)
     /*const newToDos = todos.filter(
      (d,index) => {
        if(index !== id){
          return true;
        }else{
          return false;
        }
      }
     )*/
     const newToDos = todos.filter(t=>t.id!==id)
     setToDo(newToDos);
  }

  const addToDoHandler =(item)=>{
    const newTodo = {
      id: todos.length + 1,
      content: item,
      time: new Date().toLocaleTimeString()
    }

    setToDo(todos.concat(newTodo))
  }

  return (
    <div className="bg-black h-screen p-3">
       <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
         <Input handler={addToDoHandler} />
         <Box data={todos} handleDelete={removeToDo} />
       </div>
    </div>
  );
}

export default App;
