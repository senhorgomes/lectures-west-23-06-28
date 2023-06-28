// Reassinging key values
//   foodInSpaceshipsOneObject.foodItem = "Ice Cream"
//   foodInSpaceshipsOneObject["foodItem"] = "Ice Cream"
//   foodInSpaceshipsOneObject.spaceshipColor = "Green"
//   console.log(foodInSpaceshipsOneObject)
//   foodInSpaceshipsOneObject.spaceshipColor = "hydrogen"
// Key values can be anything, functions, numbers, objects, arrays
// delete foodInSpaceshipsOneObject.spaceshipColor
const foodInSpaceshipsOneObject = {
    // key: value
    foodItem: "Pizza", 
    foodItem: "ratatoulie",
    spaceShipType: "X-wing",
    caloriesForFood: 250,
    capacityForSpaceship: 1,
    spaceshipColor: "Red"
  }
// Using the spread operator to carry over all the keys and values over to a new object
const copyOfTheObject = {...foodInSpaceshipsOneObject}

copyOfTheObject.spaceshipColor = "Yellow"

// // console.log(foodInSpaceshipsOneObject)
// function pimpMySpaceShip(spaceship, newColor){
//     spaceship.spaceshipColor = newColor
//     // console.log("Before",spaceship)
//     // spaceship = {}
//     // console.log("After",spaceship)
//     return spaceship
// }

// pimpMySpaceShip(copyOfTheObject, "Yellow")
console.log(foodInSpaceshipsOneObject)
console.log(copyOfTheObject)