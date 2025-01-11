import React ,{useState} from "react";


function App() {

  const [name,setName]=useState("");

  const [name1,setName1]=useState("");

   function handleInputChange(event)
   {
      setName(event.target.value)
   }
   function handleClickedButton(event)
   {
  setName1(name);
 

   event.preventDefault();
   }
  return (
  <div className="container">
      <h1>Hello {name1}</h1>
      <form onSubmit={handleClickedButton}>
      <input
       onChange={handleInputChange} 
       type="text" placeholder="What is your name?"
       value={name}
       /><br /> <br />
      <button type="submit" >Submit</button>
      </form>
  </div>
  );
}

export default App;
