import React ,{useState} from "react";


function App() {
   

  const [contact,setContact] = useState({
    fname:"",
    lname:"",
    email:""
  });
   
function handleInputChange(event){
     const {name,value}=event.target;
     setContact((prevalue)=>{
     if(name==="fname")
     {
      return{
        fname:value,
        lname:prevalue.lname,
        email:prevalue.email
      }
     }
     else if(name==="lname")
      {
       return{
         fname:prevalue.fname,
         lname:value,
         email:prevalue.email
       }
      }
      else if(name==="email")
        {
         return{
           fname:prevalue.fname,
           lname:prevalue.lname,
           email:value
         }
        }
        
       
    });
}


  return (
  <div className="container">
      <h1>Hello {contact.fname} {contact.lname} </h1>
      <p>{contact.email}</p>
      <form  >
      <input
       name="fname"
       onChange={handleInputChange} 
       type="text" placeholder="What is your First name?"
       value={contact.fname}
       /><br /> <br />
       <input
       name="lname"
       onChange={handleInputChange} 
       type="text" placeholder="What is your last name?"
       value={contact.lname}
       /><br /> <br />
        <input
       name="email"
       onChange={handleInputChange} 
       type="email" placeholder="What is your last name?"
       value={contact.email}
       /><br /> <br />
      <button type="submit" >Submit</button>
      </form>
  </div>
  );
}

export default App;
