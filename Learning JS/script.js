// Cloning and Merging, Object.assign

// We can create a new object and replicate the structure of the existing one,
// by iterating over its properties and copying them on the primitive level

let user = {
    name: "John",
    age: 30
};

let clone = {}; //the new empty object

//copying all user properties into clone
for (let key in user) {
    clone[key] = user[key];
}

//now clone is fully independent with the same content 
clone.name = "Pete"; //changing the data in it

// alert(user.name); //still John changes in the clone object doesn't affect it
// alert(clone.name); //Pete

//We can also use the method Object.assign

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

//Copy all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
// alert(user.name); //John
// alert(user.canView); //true
// alert(user.canEdit); //true

//We can also use Object.assign to perform a simple object cloning

let clone1 = Object.assign({}, user);

// alert(clone1.name); //John
// alert(clone1.age); //30

//Nested Cloning
let user1 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
}

//alert(user1.sizes.height); //182

//Object methods, "this"
// user1.sayHi = function() {
//     alert("Hello!")
// };

// user1.sayHi(); //Hello!
//Here we've got a method sayHi of the object user1

//we could also use a pre-declared function as a method

//first, declare
// function sayHi() {
//     alert("Hello!");
// }

//Also can be written like this 
// user1 = {
//     sayHi() {
//         alert("Hello");
//     }
// }; 

//then add as a method
//user1.sayHi = sayHi;

// user1.sayHi();

//"this" in methods 

let user2 = {
    name: "John",
    age: 30,

    sayHi() {
        //"this" is the "current object"
        alert(this.name);
    }

};

user2.sayHi(); //John
//During the execution of user.sayHi(), the value os "this" will be user

//Arrow functions

let user3 = {
    firstName: "Ilya",

    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};

user3.sayHi(); //Ilya