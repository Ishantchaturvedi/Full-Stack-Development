
//functions


function getAge() {
    return 190;
}

function utility(name = "Ishant", age = getAge()) {
    console.log(name," ",age);
}

utility("Ishant");





// function solve(value = {age:15, wt:90, ht:190}) {
//     console.log("Hello Guys", value);
// }

// solve();

// function sayName(fName = "Ishant", lName = "Chaturvedi") {
//     console.log("My Name is: " , fName," ", lName);
// }

// sayName("Ishant");




// class Human {

//     //properties
//     age = 13; //public
//     #wt = 80;  //private
//     ht = 180;

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;

//     }

    
//     //behavior

//     walking(){
//         console.log("I am Walking", this.#wt);
//     }

//     running(){
//         console.log("I am running")
//     }


//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(val) {
//         this.#wt = val
//     }

// }


// let obj = new Human(50, 190,101);
// console.log(obj.fetchWeight);
// // console.log(obj.#wt);

// obj.walking();