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
