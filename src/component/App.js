import React ,{useState} from "react";
import ToDoList from "./ToDoList";
import InputArea from "./InputArea";

function App()
{
  
  const [items,setItems] = useState([]);
 
  function handleClick(item)
  {
     setItems((preValue)=>{
         return [...preValue,item];
     });
    
  }
   function DeleteItem(id)
   {
    setItems(preValue=>{
         return preValue.filter((item,index)=>{
          return index!=id;
         })
    });
   }
  return (
  <div className="container">
    <div className="Heading">
      <h1>To-Do List</h1>
    </div>
    <InputArea
     onAdd={handleClick}
      />
    <div>
      <ul>
        {items.map((todoitem,index)=> (
          <ToDoList 
            key={index}
            id={index}
            text={todoitem}
            onChecked={DeleteItem}
          />
        ))}
      </ul>
    </div> 
  </div>
  );
}
export default App;
