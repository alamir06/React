import React ,{useState} from "react";




//ES6 spread operator

//array spread
const names=["Alamairew","Aklilu","Temesgen","GHN","Fkadie"];
const names1=["Bimrew",...names,"alamir","Tafesse"];

   console.log(names1);
   
//object spread
   const name={
    fname:"Alamirew",
    lname:"Wagaw"
   }
   const user={
       id:1,
       key:89,
    ...name,
    username:"alamirew wagaw"
   }

   console.log(user);
   
function App() {
   

  const [contact,setContact] = useState({
    fname:"",
    lname:"",
    email:""
  });
   
function handleInputChange(event){
     const {name,value}=event.target;
     setContact((prevalue)=>{
      return{
        ...prevalue,
          [name]:value
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
