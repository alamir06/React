import React ,{useState} from "react";



function App()
{
  const [item,setItem] = useState("");
  const [items,setItems] = useState([]);

  function changeInput(event)
  {
    const inputtvALUE=event.target.value;
    setItem(inputtvALUE);
  }
 
  function handleClick(event)
  {
     setItems((preValue)=>{
         return [...preValue,item];
     });
     setItem("");
  }

  return (
  <div className="container">
    <div className="Heading">
      <h1>To-Do List</h1>
    </div>
    <div className="form">
      <input 
      name="item"
      onChange={changeInput}
      type="text" 
      value={item} />
      <button onClick={handleClick} >
        <span>Add</span>
      </button>
    </div>
    <div>
      <ul>
        {items.map((todoitem)=>{
           return <li>{todoitem}</li>
        })}
      </ul>
    </div>
     
  </div>
  );
}

export default App;
