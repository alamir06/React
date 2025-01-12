import React ,{useState} from "react";


function App() {

     const [fullName,setFullNmae] = useState({
        fname:"",
        lname:""
     });
     const [heading,setheading]=useState("");

    function handleInputChange(event)
    {
  
      const {name,value}=event.target;

      setFullNmae(prevalue=>{
        if(name==="fname")
        {
          return {
            fname:value,
            lname:prevalue.lname
          }
        }
        else if(name==="lname")
        {
          return {
            fname:prevalue.fname,
            lname:value
          }
        }
      });
     
    }

    function handleclicked(event)
    {
       setheading(fullName.fname +" "+fullName.lname);

       event.preventDefault();
    }
  return (
  <div className="container">
      <h1>Hello {heading}</h1>
      <form  onSubmit={handleclicked}>
      <input
       name="fname"
       onChange={handleInputChange} 
       type="text" placeholder="What is your First name?"
       value={fullName.fname}
       /><br /> <br />
       <input
       name="lname"
       onChange={handleInputChange} 
       type="text" placeholder="What is your last name?"
       value={fullName.lname}
       /><br /> <br />
      <button type="submit" >Submit</button>
      </form>
  </div>
  );
}

export default App;
