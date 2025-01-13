import React from "react";


function ToNote(props)
{
    return(
        <div className="note-displayer">
          <h3 className="note-titles">{props.title}</h3>
          <p className="notes">{props.note}</p>
          <button className="delete"
             onClick={()=>{
                props.onChecked(props.id)
             }}
          >Delete</button>
        </div>
    );
}
export default ToNote;