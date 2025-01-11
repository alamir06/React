const animals=[
    {name:"cat",
    sound:"miaw",
    feedingRequirements:{
        food:2,
        water:3
    }
    },
    {name:"dog",
        sound:"wow",
        numberOflegs:[1,2,3,4,5]
        }
];

function useAnimals(animal)
{
    return [
       animal.name, 
       function()
       {
        console.log(animal.sound);
       }
    ];
}

export default animals;
export {useAnimals};