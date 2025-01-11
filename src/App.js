import React ,{useState} from "react";
import cars from "./cars";


const [Honda,Tesla]=cars;
const {
   model:hondaModel,
  speedStatus:{topSpeed:hondatopspeed},
  colorsByPopuarity:[ ,hondatopcolor],}=Honda;

const {
  model:teslamOdel,
  speedStatus:{topSpeed:teslaTopSpeed}
,colorsByPopuarity:[ ,teslatopcolor],
}=Tesla;

  function App(){
return (
  <div >
   <table border={1}>
   <tbody>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{hondaModel}</td>
      <td>{hondatopspeed}</td>
      <td>{hondatopcolor}</td>
    </tr>
    <tr>
    <td>{teslamOdel}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslatopcolor}</td>
    </tr>
    </tbody>
   </table>
  </div>
  );
  }
export default App;
