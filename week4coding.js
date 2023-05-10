// Problem 1
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
// creates an array of ages.
let difference = ages[ages.length - 1] - ages[0];
console.log(difference);
// subtracts the first element of the array from the last element. Prints the difference to the console.

ages.push(35);
difference = ages[ages.length- 1] - ages[0];
console.log(difference);
// adds 35 to ages.

let total = 0;
for (let index = 0; index < ages.length; index++) {
    total = total + ages[index];
    console.log("index: ", index, "value of ages[index]: ", ages[index], "total: ", total);
}
let average = total / ages.length;
console.log(average);
// uses a loop to iterate through the array and calculates the average age.

// Problem 2
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//creates an array of names.

let numLetters = 0;
for (let i = 0; i < names.length; i++) {
    numLetters = numLetters + names[i].length;
    console.log("i: ", i, "value of names[i]: ", names[i], "length of values of names[i]: ", names[i].length, "numLetters: ", numLetters);
}

let averageNumLetters = numLetters / names.length;
console.log('Average number of letters per name: ', averageNumLetters);
//calculates the average number of letters per name.

let allTheNames = '';
for (let x = 0; x < names.length; x++) {
    allTheNames = allTheNames + names[x] + ', ';
}
console.log(allTheNames);
//iterates through the array and concatenates all the names separated by spaces.

// Problem 3.
// To access the last element you use array length - 1. E.g. ages[ages.length - 1]

// Problem 4.
// To acess the first element you use index 0. E.g. names[0]

// Problem 5.
let nameLengths = [];
for (let z = 0; z < names.length; z++) {
    nameLengths.push(names[z].length);
    console.log(nameLengths);
}
//creates an array nameLengths. 
//Iterates over the previously created array and adds the length of each name to nameLengths.
//prints nameLengths.

// Problem 6.
let sumOfNameLengths = 0;
for (let c = 0; c < nameLengths.length; c++) {
    sumOfNameLengths = sumOfNameLengths + nameLengths[c];
    console.log(sumOfNameLengths);
}
console.log(sumOfNameLengths);
//iterates over the nameLengths array and calculates the sum of all of the names. 

//Problem 7.
function Names(word, n){ 
    let concatenatedWords = "";
    for(let i = 0; i<n; i++){
      concatenatedWords += word;
    }
   console.log(concatenatedWords)
}
Names("cheese", 8);
//Prints cheese to the console 8 times.

//Problem 8.
function  fullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(fullName("Lisa", "Frank"));
//creates a function that concatenates first name and last name to make a full name. 

//Problem 9.
let arrayOfNumbers = [5, 200, 150, 7];
let sumOfNumbers = 0;
for(const a of arrayOfNumbers){
    sumOfNumbers += a;
} const middleNumber = sumOfNumbers / arrayOfNumbers.length;
console.log(middleNumber)
//returns true if the sum of all numbers in the array is >100.

//Problem 10.   
function averageOfArray(theArray) {
    let sumOfNumbers = 0; 
    for(let i = 0; i < theArray.length; i++){
        sumOfNumbers += theArray[i];
    }
    
    return sumOfNumbers / theArray.length;
}

console.log("sum of numbers: ", averageOfArray([1, 4, 8, 12, 25]));
//returns the average of all the elements in the array.

//Problem 11.
function averageOfArrays(array1, array2){
    let sumOf1 = 0;
    for(let i = 0; i < array1.length; i++){
        sumOf1 += array1[i];
    }
    const averageOfOne =  sumOf1 /array1.length;
    let sumOf2 = 0;
    for(let x = 0; x < array2.length; x++){
    sumOf2 += array2[x];
}   
    const averageOf2 = sumOf2 / array2.length;
    if(averageOfOne > averageOf2 ){
        return true;
    } else {
        return false;
    }

}
console.log(averageOfArrays([1,3,5,7],[6, 8, 9]));
// takes two arrays and returns true if the average of elements in the first array > avg of second array.

//Problem 12.
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside === true && moneyInPocket > 10.5){
        return true
    }
}
console.log(willBuyDrink(true, 12));
//returns true if isHotOutside is true & moneyInPocket > 10.5.

//Problem 13.
function willDogPeeOutside(hoursSinceLastPee, isOwnerHome){
    if(hoursSinceLastPee > 2 && isOwnerHome === false){
        return 'Yes, he will definitely pee on the floor'
    } else {
       return 'Yes, he will pee on the floor anyways.'
    }
}
console.log(willDogPeeOutside(1, true));
//calculates the odds of the dog peeing on the floor based on hoursSinceLastPee & isOwnerHome.





