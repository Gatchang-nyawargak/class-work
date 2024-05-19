function Person(name,age){
    this.name= name;
    this.age= age;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name}and i am ${this.age} years old.`);
        
    }
};
//creating an object
const adam = new Person("Adam",30);
console.log({adam});
adam.language= "English"
console.log({adam});

const eve = new Person("Eve",20);
console.log({eve});

//adding objects to the constractor
//prototype constractor

Person.prototype.nationality= "kenyan";
console.log({adam});
console.log('adam-nationality',adam.nationality);
console.log('eve-nationality',eve.nationality);

//changing object values
//prototype object

eve.nationality= 'Ugandan'
console.log({eve});
console.log(adam);
adam.greet()