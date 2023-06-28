//Why objects?
// Store data
// key value pairs
// multiple copies of a class
// pass data
// need to reuse functionality
// more organized
// easy to add to/ modify
// When to use Objects?

const foodInSpaceshipsOne = ["Pizza", "X-wing", 250, 1];
const foodInSpaceshipsTwo = ["Quesadilla", "Falcon 9", 100, 5];
const foodInSpaceshipsThree = ["Starship", 10, "Sushi", 150];
console.log(foodInSpaceshipsThree[0])
// Creating a single item
const foodInSpaceshipsOneObject = {
  // key: value
  foodItem: "Pizza",
  spaceShipType: "X-wing",
  caloriesForFood: 250,
  capacityForSpaceship: 1
}
const foodInSpaceshipsTwoObject = {
  // key: value
  foodItem: "Quesadilla",
  spaceShipType: "Falcon 9",
  caloriesForFood: 100,
  capacityForSpaceship: 5
}
// Arrays are for when we want to store multiple items
const listOfSpaceshipsCarryingDeliciousFood = [foodInSpaceshipsOneObject, foodInSpaceshipsTwoObject]