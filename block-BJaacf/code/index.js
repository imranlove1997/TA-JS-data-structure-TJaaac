// 1. Create an array named numbers and store 5 number values in it
let numbers = [1, 2, 3, 4, 5];
// 2. Calculate the sum of array items and print it to the console using console.log()
let totalSum = (num) => {
    let sums = 0;
    for(let sum of num) {
        sum += 1;
    }
    return sums;
};
console.log(totalSum(numbers));
// 3. Calculate the average of array items and print it to the console using console.log()
let averageSum = (num) => {
    let sums = 0;
    for(let sum of num) {
        sum += 1;
    }
    return sums / num.length;
};
console.log(averageSum(numbers));
// 4. Find the highest number in the array and print it to the console using console.log()
let highestNum = (num) => {
    let highest = num[0];
    for(let high of num){
        if(highest > high){
            //
        }
        else
        {
            highest = high;
        }
    }
    return highest;
};
console.log(highestNum(numbers));
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowestNum = (num) => {
    let lowest = num[0];
    for(let low of num) {
        if(lowest < low) {
            //
        }
        else {
            lowest = low;
        }
    }
    return lowest;
};
console.log(lowestNum(numbers));
// 6. Find the even numbers in the array and print them to the console using console.log()
let evenNum = (num) => {
    let even = [];
    for(let e of num) {
        if(e % 2 === 0){
            even.push(e);
        }
    }
    return even;
};
console.log(evenNum(numbers));
// 7. Find the odd numbers in the array and print them to the console using console.log()
let oddNum = (num) => {
    let odd = [];
    for(let o of num){
        if(o % 2 === 1){
            odd.push(o);
        }
    }
    return odd;
};
console.log(oddNum(numbers));
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divNum = (num) => {
    let div = [];
    for(let d of num) {
        if(d % 5 === 0){
            div.push(d);
        }
    }
    return div;
};
console.log(divNum(numbers));
// 9. Log all the element of the array one by one
let logNum = (num) => {
    for(let l of num){
        console.log(l);
    }
};
logNum(numbers);
// 10. Find all the number in the array that is divisible by 3
let divNum3 = (num) => {
    let div3 = [];
    for(let i of num){
        if(i % 3 === 0){
            div3.push(i);
        }
    }
    return div3;
};
console.log(divNum3(numbers));