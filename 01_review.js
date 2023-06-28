//Primitive Data Types?
// boolean => true/false
// string => "populated string" / ""
// number/integer => any number except for 0 / 0
// Undefined => falsey
// Null => falsey
// Big Int/Symbol

// Data structures

// object => {key:"value"} / {}
// array => [1,2,3] / []
function checkFalseyValues(primitiveDataType){
  if(primitiveDataType){
    console.log("This is truthy")
  } else {
    console.log("This is falsey")
  }
}
checkFalseyValues({})