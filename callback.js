function greet(userName,callBack){
    console.log(`Hello   there ${userName}`);

    callBack();
};

function intro(){
    console.log(`This is me`);
};

greet('Hellen', intro);


setTimeout(intro,200);

setInterval(function(){
console.log('This is an interval');
}, 300);