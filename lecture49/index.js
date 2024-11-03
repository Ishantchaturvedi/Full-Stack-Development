// console.log("Ishant")

let src = {
    age:13,
    wt:60,
    ht:180
};

let dest = {};
//cloning using iteration

for(let key in src) {
    let newKey = key;
    let newValue = src[key];
    //insert newKey and vale in dest and create a clone
    dest[newKey] = newValue;
}

src.age = 70;

console.log("src: ", src);
console.log("dest: ", dest);




// let src2 = {
//     value:101,
//     name: "Ishant Chaturvedi"
// }

// let dest = Object.assign({}, src, src2);


// src.age = 80;

// console.log("src: ", src);

// console.log("dest: ", dest);






// let dest  = {...src};

// //let dest = src;

// src.age = 90;

// console.log("src: ", src);

// console.log("dest: ", dest);

//console.log(onj)

//onj.color = "White";

//console.log(onj)