/* For all the built in erros,the error object has two main properties(name,message,stack).We can throw our own error by using the throw syntax.*/

try {
        let age = prompt("Enter your age")
        age = Number.parseInt(age) 
        if(age>150){
        throw new ReferenceError("This is probably not true")
        }
} catch (error) {
        console.log(error.name)
        console.log(error.message)
        console.log(error.stack)
}

console.log("The script is still running")
