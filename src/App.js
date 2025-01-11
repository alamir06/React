import React ,{useState} from "react";


function App() {

  const now=new Date().toLocaleTimeString();

  const [time,setTime]=useState(now);
  console.log(time)

setInterval(Time,1000);
function Time()
{
  const nowTime=new Date().toLocaleTimeString();
  setTime(nowTime);
}


  return (
  <div id="p">
     <h1>{time}</h1>
    {/* <button onClick={Time}>+</button> */}
  </div>
  );
}

export default App;
