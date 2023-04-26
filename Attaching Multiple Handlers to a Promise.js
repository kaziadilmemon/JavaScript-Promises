/* We can attach multiple handlers to one promise. They don't pass the result to each other,instead they process it independently */

let p1 = new Promise((resolve, reject) => {
        // alert("Hey I am not resolved")
        setTimeout(() => {
                resolve(1);
        }, 2000)
})

p1.then(() => {
        console.log("Hurray")
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve(4)
                }, 6000)
        })
}).then((value) => { console.log(value) })

p1.then(() => {
        console.log("Congratulations this promise is now resolved")
})

