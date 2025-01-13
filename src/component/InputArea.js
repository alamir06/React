import React, { useState } from "react";



function InputArea(props)
{
    const [note,setNote] = useState({
        title:"",
        note:" "
    });

    function handleInput(event)
    {
        const {name,value}=event.target;
        setNote((preValue=>{
          return {
            ...preValue,
            [name]:value
          }
        }));
    } 
    return (
       <div>
       <h3 className="note-title">Write you note👇</h3>
        <label className="title">title</label>
        <input 
        name="title"
        placeholder="Write Title"
        onChange={handleInput}
        type="text"
        value={note.title}
        /><br />
        <label className="note">Note</label>
        <input
        name="note" 
        placeholder="Take your note"
        onChange={handleInput}
        type="text"
        value={note.note}
        />

        <button onClick={()=>{
          props.onAdd(note);
          setNote({
            title:"",
            note:""
          });
        }}>Add</button>
       </div>
    );
}

export default InputArea;