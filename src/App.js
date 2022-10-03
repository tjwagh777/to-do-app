import Input from "./Components/Input";
import Box from "./Components/Box";
import { useState } from "react";

function App() {
  const [todos,setToDo] = useState([]);
   
  const removeToDo = (id) => {
     //console.log(id)
     const newToDos = todos.filter(
      (d,index) => {
        if(index !== id){
          return true;
        }else{
          return false;
        }
      }
     )
     setToDo(newToDos);
  }

  const addToDoHandler =(item)=>{
      setToDo(
        [
          ...todos,
          {
            item,
            time: new Date().toLocaleTimeString()
          }
        ]
      )
  }

  return (
    <div className="bg-black h-screen p-3">
       <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
         <Input handler={addToDoHandler} />
         <Box data={todos} removeHandler={removeToDo} />
       </div>
    </div>
  );
}

export default App;
