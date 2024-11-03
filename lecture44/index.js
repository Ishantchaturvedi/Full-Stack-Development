// let obj = {
//     name: "Ishant",
//     age: 22,
//     weight: 60,
//     height: "5 ft 8in",
//     greet: function(){
//         console.log("Hello how are you are All");
//     } 
// };

// for(let key in obj){
//     console.log(key, " ", obj[key]);
// }

// console.log(obj)
// obj.greet();

// console.log(typeof(obj))

// let obj2 = obj;

// let arr = [1,2,3,4,5];

//array constructor

// console.log(arr);

// let brr = new Array('Ishant',100,true);
// brr.push('Chaturvedi');
// brr.pop();

// brr.shift();
// brr.unshift('Ishant Chaturvedi');
// brr.push(20);
// brr.push(40);

// brr.push(70);

// // console.log(brr.slice(2,4) );

// // console.log(brr);

// brr.splice(1,0,'Kunal');

// // console.log(brr[0]);


// console.log(brr);

// console.log(typeof(brr)); 

// let arr = [10,20,30,11,21,44,51];

// let evenArray = arr.filter((number) => {
//     return number%2 === 0;
//     // if(number%2 === 0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// });

// console.log(evenArray)

// arr.map((number,index) => {
//     console.log(number);
//     console.log(index);
// })

// let ansArray = arr.map((number) => {
//     return number*number;
// })

// console.log(ansArray)


// let arr = [1,2,'Ishant', 'Chaturvedi', null];

// let ans = arr.filter((value) => {
//     if(typeof(value) === 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(ans);


// let arr = [10,20,30,40];


// let ans = arr.reduce((acc,curr) => {
//     return acc + curr;

// }, 0);

// console.log(ans);



// let arr = [9,1,7,4,2,8];

// arr.sort();

// console.log(arr);

// console.log(arr.indexOf(9));

// let arr = [10,20,30];

// let length = arr.length;
// console.log("length: " , length);

// //traditional loop

// for(let index = 0; index < length; index++) {
//     console.log(arr[index]);
// }



// arr.forEach((value, index) => {
//     console.log("Number: ", value, "Index: ", index);
// })

// let arr = [10,20,30,40];

// for(let value of arr) {
//     console.log(value);
// }

// let fullName = "chaturvedi"

// for(let val of fullName) {
//     console.log(val);
// }

// let arr = [10,20,30,40,50];

// function getSum(arr){
//     let len = arr.length;
//     let sum = 0;
//     for(let index=0; index<len; index++){
//         sum = sum + arr[index];
//     }
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);

let arr = [10,20,30,40,50];

let getSum = (arr) => {
    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    })
    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);