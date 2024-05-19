//Control Flow

function personAge(age){
    if (age >=18){
        return "You are an adult";
    }
    else if(age >=13 && age< 18 ){
        return "You are a teenager";
    }
    else{
        return "you are a child";
    }
}
console.log(personAge(10));

const greeting= (daysOfTheWeek) => {
    switch (daysOfTheWeek) {
        case "monday":
            console.log("Hello Monday");
            
            break;
            case "Tuesday":
            console.log("Hello Tuesday");
            
            break;

            case "Wednesday":
            console.log("Hello Wednesday");
            
            break;
            case "Thursday":
            console.log("Hello Thursady");
            
            break;

            case "Friday":
            console.log("Hello Friday");
            
            break;
            case "Saturday":
            console.log("Hello Saturday");
            
            break;

            case "Sunday":
            console.log("Hello Sunday");
            
            break;

            default:
                console.log("Not the day of the week");
    
       
    }
};

greeting("Tuesday")
greeting("When")