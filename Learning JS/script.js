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

alert(user.name); //still John changes in the clone object doesn't affect it
alert(clone.name); //Pete

//We can also use the method Object.assign

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

//Copy all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); //John
alert(user.canView); //true
alert(user.canEdit); //true

//We can also use Object.assign to perform a simple object cloning

let clone1 = Object.assign({}, user);

alert(clone1.name); //John
alert(clone1.age); //30

//Nested Cloning
let user1 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
}

alert(user1.sizes.height); //182