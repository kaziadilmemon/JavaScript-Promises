const loadScript = async (src) => {
        return new Promise((resolve, reject) => {
                let script = document.createElement("script")
                script.src = src
                script.onload = () => {
                        resolve(src + " Done success")
                }
                document.head.append(script)
        })
}
// Problem number 1 : Write a program to find load a JavaScript file in a browser using promises. use.then() to display an alert when the load is Complete.

let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
 a.then((value) => {
       console.log(value)
 })

// Problem number 2 : Write the same program from previous Question and use asunc/await Syntax.

 const main2 = async () => {
         console.log(new Date().getMilliseconds())
         let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
         console.log(a)
         console.log(new Date().getMilliseconds())
 }
 main2()

// Problem number 3 : Create a Promise which rejects after 3 seconds use an async/await to get its value. Use a try catch to handle its error.

let p = () => {
         return new Promise((resolve, reject) => {
                 setTimeout(() => {
                         reject(new Error("Please this is not acceptable"))
                 }, 3000)
         })
 }

 let a = async () => {
         try {
                 let c = await p()
                 console.log(c)
         }
         catch (err) {
                 console.log("This error has been handled")
         }
 }
 a()

/* Problem number 4 : Write a program using promise.all() inside an async/await to await 3 promises. Compare its results with the case where we await 
these promises one by one. */

let p1 = async () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve(10)
                }, 2000)
        })
}
let p2 = async () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve(20)
                }, 1000)
        })
}
let p3 = async () => {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve(30)
                }, 3000)
        })
}

const run = async () => {
        console.time("run")
        // let a1 = await p1() // Fetch first 10 products from the database
        // let a2 = await p2() // Fetch another 10 products from the database
        // let a3 = await p3() // Fetch yet another 10 products from the database


        let a1 = p1() // Fetch first 10 products from the database
        let a2 = p2() // Fetch another 10 products from the database
        let a3 = p3() // Fetch yet another 10 products from the database
        let a1a2a3 = await Promise.all([a1, a2, a3])
        console.log(a1a2a3)
        // console.log(a1, a2, a3)
        console.timeEnd("run")
}

run()
