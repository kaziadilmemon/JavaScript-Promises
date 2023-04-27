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
