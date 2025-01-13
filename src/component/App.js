import React, { useState } from "react";
import Heading from "./Heading";
import InputArea from "./InputArea";
import ToNote from "./ToNote";




function App()
{
  const [notes,setNotes] = useState([]);

    function addItem(note)
    {
       setNotes(preValues=>{
        return [...preValues,note]
       });
      
    }
   
    function deleteItem(id)
    {
       setNotes(preValues=>{
        return preValues.filter((noteitem,index)=>{
          return index!=id;
        })
       });
    }
  return (
    <div>
      <Heading />
      <div className="container">
        <InputArea
         onAdd={addItem}
         />
      </div>
      <div className="displau">
      {notes.map((noteItem,index)=>(
         <ToNote 
          title={noteItem.title}
          note={noteItem.note}
          key={index}
          id={index}
          onChecked={deleteItem}
         />
      ))}
      </div>
    </div>
  );
}


export default App;