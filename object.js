const cup = {
    color: "Red",
    size: "small",
    texture: "smooth",
    shape:"Round",
    functionality:{
        drinkType: "tea",
        temperature:"hot"
    },
//creating object methods
    drink: function(){
        console.log("use me to drink");
        console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinkType}`);
      }

};
const a = 60;
//logs an object
console.log({color:cup.color});
//logs the item
console.log(cup.size);
console.log("temperature",cup.functionality.temperature);
console.log("texture",cup.color);

//Adding items to an object
cup.model="glass"
console.log(cup);

//deleting

delete cup.model
console.log(cup);

cup.color = "green"
console.log(cup);



cup.drink()
const keys=Object.keys(cup)
console.log(keys);

const values = Object. values(cup)
console.log(values);

// looping through object

const loop = Object.keys(cup).map(item => {
    return({key:item,values:cup[item]});
})
console.log({loop});

Object.keys(cup).forEach(item=>{
    console.log({key:item,values:cup[item]});

})