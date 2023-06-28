//Two ways to look up values in objects
//dot notation - object.key
//bracket or square bracket notation - object["key"]

const foodInSpaceshipsOne = ["Pizza", "X-wing", 250, 1];

console.log(foodInSpaceshipsOne[5])
// foodInSpaceshipsOne = {
//   0: "Pizza",
//   1: "X-wing"
// }
// Creating a single item
const foodInSpaceshipsOneObject = {
  // key: value
  foodItem: "Pizza",
  spaceShipType: "X-wing",
  caloriesForFood: 250,
  capacityForSpaceship: 1
}
// Dot notation
foodInSpaceshipsOneObject.keyThatDoesntExist

// Square bracket notation
// We refer to variables
const keyName = "capacityForSpaceship"
// foodInSpaceshipsOneObject["capacityForSpaceship"]
foodInSpaceshipsOneObject[keyName]