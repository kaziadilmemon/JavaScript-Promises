/* We can chain promises and make them pass the resolved valuesto one another like this: 
* Here is the flow of Execution:
1. The initial Promise resolves in 1 Seconds(Assumption).
2. The next.then() handler is then called, which returns a new promise (resolved with 2 values).
3. The next.then() gets the result of previous one and this keeps on going.

Every call to .then() returns a new Promise whose value is passed th othe next one and so on. We can even create custom promises inside.then() */

let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log("Resolved after 2 seconds")
                resolve(56)
        }, 2000)
})

p1.then((value) => {
        console.log(value)
        return new Promise((resolve, reject) => {
                setTimeout(() => { resolve("Promise 2") }, 2000)
        }) 
}).then((value) => {
        console.log("We are done")
        return 2
}).then((value)=>{
        console.log("Now we are pakka done")
})
