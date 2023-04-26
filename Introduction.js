/* The Solution to the Callback hell is Promises. A Promise is a "Promise of code execution" 
The code either execute or fails in both the cases the Subscriber will be notified */


let promise= new Promise (function(resolve,reject){
  alert("Hello")
  resolve(56)
  
})

console.log("Hello one")
setTimeout(function() {
  console.log("Hello Two in 2 Seconds")
}, 2000)

console.log("My name is" + "Hello Three")
console.log(promise)

/* resolve & reject are two callbacks provided by JavaScript itself. They are called like this:

resolve(value) : If the Job is Finished Successfully 
reject(error) : If the job fails 

The Promise object returned by the new promise constructor has these properties

1. state : Initially Pending, then changes to either "fulfilled" when resolve is called or "rejected" when reject is called

2. result: Initially undefined, then changes to value if resolved or error when rejected.

*/
