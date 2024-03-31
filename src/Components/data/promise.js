const promiseone= new Promise(function(resolve,reject){
setTimeout(() => {
    console.log("Async task is completed")
    resolve();
}, 1000);

});
promiseone.then(function(){
    console.log("promise consumed ")
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("asyn 2 is Complete")
        resolve()
    },1000);
}).then(function(){
    console.log("Sucess2");
})

async function consumepromise() {
    try {
        // Assuming consumepromise is a function that returns a Promise
        const response = await consumepromise();
        console.log("Success consume promise");
    } catch (error) {
        console.error("Error consuming promise:", error);
    }
}

consumepromise();
