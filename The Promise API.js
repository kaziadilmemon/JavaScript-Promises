// There are 6 static methods of Promise Class.

let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Value 1");
        }, 11000);
});

let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
                // resolve("Value 2");
                reject(new Error("Error"));
        }, 2000);
});

let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Value 3");
        }, 3000);
});

// p1.then((value) => {
//         console.log(value)
// })

// p2.then((value) => {
//         console.log(value)
// })

// p3.then((value) => {
//         console.log(value)
// })

/* 1.Promise.all(promises) : Waits for all promises to resolve and returns the array of their results.If any one fails, it become the error and all other results are ignored. */
let promise_all = Promise.all([p1, p2, p3])

/* 2.Promise.allSettled(promises) : Waits for all promises to settle and returns their results as an array of objects with status and value. */
let promise_all = Promise.allSettled([p1, p2, p3])

/* 3.Promise.race(promises) : Waits for the first promise to settle and its result/error becomes the outcome.*/
let promise_all = Promise.race([p1, p2, p3])

/* 4.Promise.any(promises) : Waits for the first promises to fulfill & not rejected, and its result becomes the outcome.Throws Aggregate Error if all the promises are rejected. */
let promise_all = Promise.any([p1, p2, p3])

/* 5.Promise.resolve(promises) : Makes a resolved promise with the given value. */
let promise_all = Promise.resolve(6)

/* 6.Promise.reject(error) : Makes a rejected promise with the given error */
let promise_all = Promise.reject(new Error("Hey"))

promise_all.then((value) => {
        console.log(value)
})
