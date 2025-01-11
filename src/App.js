import React,{useState} from "react";




function App()
{

  const [text,srtText]=useState("Hello");
  const [isMouse,setMouseOver]=useState(false);
    function headingText()
    {
      srtText("heading")
    }
    function changetoBlack()
    {
      setMouseOver(true);
    }
    function changeToWhite()
    {
      setMouseOver(false);
    }
  return (
    <div className="container">
      <h1>{text}</h1>
      <input type="text" placeholder="What is your name?"/><br />
      <button type="submit"
       style={{backgroundColor:isMouse ? "black" : "white"}}
       onClick={headingText}
       onMouseOver={changetoBlack}
       onMouseLeave={changeToWhite}
       >Submit</button>
    </div>
  );
}

export default App;