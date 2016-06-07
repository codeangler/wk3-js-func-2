// #1
// function getName (object){
//   console.log(object.name);
//   return object.name;
// }

// getName({ name: 'Luisa', age: 25 })

// #2
// function totalLetters (arrayOfString){
//   var total = 0; 
//   for (var word in arrayOfString){
//     total = (arrayOfString[word].length) + total;
//     console.log(arrayOfString[word].length)
//     }
//   console.log(total);
// }
// totalLetters(['javascript', 'is', 'awesome'])

// #3 
// function keyValue (keyValue, value){
//   var myObject = {};
//   myObject[keyValue] = value;
//   console.log(myObject)
// }
// keyValue('city', 'Denver')

// #4
// function negativeIndex (myArray, negNum){
//   var magicResults = myArray.length + negNum;
//   return myArray[magicResults];
// }
// negativeIndex(['a', 'b', 'c', 'd', 'e'], -2)

// #5
// function removeM (someString){
//   newString = "";
//   for ( var m in someString){
   
//   }
//     newString = someString.split('m').join('')
// //     newString = someString.split('M').join('')
//   return newString;
// }
// removeM ('memory')