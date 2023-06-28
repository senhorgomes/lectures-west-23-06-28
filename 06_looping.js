//How can we iterate(or loop) through objects?
// for..of
// c style loop
// .forEach()
// for..in
// while
const foodInSpaceshipsOne = ["Pizza", "X-wing", 250, 1];
// for(let element of foodInSpaceshipsOne){
//   console.log(element)
// }

const foodInSpaceshipsOneObject = {
  // key: value
  foodItem: "Pizza", 
  spaceShipType: "X-wing",
  caloriesForFood: 250,
  capacityForSpaceship: 1,
  spaceshipColor: "Red",
}
for(let key in foodInSpaceshipsOneObject){
  // console.log(key)
  // Accessing key values
  console.log(foodInSpaceshipsOneObject[key]);
}
// Takes out all the keys of the objects and converts it into an Array
console.log(Object.keys(foodInSpaceshipsOneObject));
// Takes out all the values of the objects and converts it into an Array
console.log(Object.values(foodInSpaceshipsOneObject));