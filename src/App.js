import React ,{useState} from "react";
import  animals,{ useAnimals } from "./animals";

const [cat,dog]=animals;//array destructuring
function Anim()
{
  const [animal,makeSound]=useAnimals(dog);
  console.log(animal);
  makeSound();
  
}
// console.log(cat);//similar with animals[0];

// const {name,sound}=cat;
// console.log(sound);//similar with animals[0].sound

// // give another name for the property
// const {name:dogNmae,sound:dogSound}=dog;

// console.log(dogNmae);
// //  give default value to the eproperty

//  const {name="miawa",sound="purr"}=cat;
// console.log(sound);
// // nested object destructuring
// const {name,sound,feedingRequirements:{food,water}}=cat;
// console.log(food);

// // nested array destructuring
// const {name,sound,numberOflegs:[one,two,three,four,five]}=dog;
// console.log(two);


function App() {


  return(
    <div>
    <h1><Anim /></h1>
    <h1><Anim /></h1>
    </div>
  );
}

export default App;
