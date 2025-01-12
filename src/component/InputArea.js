import React ,{useState} from "react";

function InputArea(props)
{
    const [item,setItem] = useState("");

    function changeInput(event)
    {
      const inputtvALUE=event.target.value;
      setItem(inputtvALUE);
    }
    return (
    <div>
    <div className="form">
     <input 
      name="item"
      onChange={changeInput}
      type="text" 
      value={item} />
      <button onClick={()=>{
       props.onAdd(item);
       setItem("");
      }} >
      <span>Add</span>
      </button>
      </div>
    </div>
    );
}

export default InputArea;