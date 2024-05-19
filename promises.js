let intership = false;
let ourPromise = new Promise((resolve, reject) => {
    if(intership){
        resolve('I made it');
    }
    else{
        reject('I will try harder')
    }
})

ourPromise.then((response) => {
console.log('I will continue working hard');
})
.catch(()=>{
    console.log('I will contiune applying for jobs');

})
 .finally(() => {
  console.log('I will be a good software Engineer');
 });



 console.log({ourPromise});

 //async function

 async function myAkiraChixDream(){
    try{
    console.log('This is my dream');
    await ourPromise;
    }
    catch{
    console.log('This is my dream');
    }
 }
myAkiraChixDream();
