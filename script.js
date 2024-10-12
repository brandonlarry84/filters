let rockets = [
    { name:'Sally', age:32 },
    { name:'Bob', age:23 },
    { name:'Jim', age:16 },
    { name:'Scott Rhine', age:7 },
    { name:'Angie Davison', age:4 },
    { name:'James Munger', age:3 }
    ];

console.log("People:");
console.log(rockets);


let people = rockets.filter(function(person){
    return person.age >= 18;
});

console.log("Here are the people older than 18");
console.log(people);