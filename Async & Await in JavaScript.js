/* There is a special syntax to work with pronous in JavaScript. A function can be made async by using async keyword.
An async function always returns a promise, other values are wrapped in a promise automatically.

The await keyword makes javascript wait untill  the promise settles and returns its value. Its just a more elegant syntax of getting the promise result.*/

async function harry() {
        let delhiWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("27 Deg")
                }, 2000)
        })

        let bangaloreWeather = new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve("21 Deg")
                }, 5000)
        })

        // delhiWeather.then(alert)
        // bangaloreWeather.then(alert)
        console.log("Fetching Delhi Weather Please wait ...")
        let delhiW = await delhiWeather
        console.log("Fetched Delhi Weather: " + delhiW)
        console.log("Fetching Bangalore Weather Please wait ...")
        let bangaloreW = await bangaloreWeather
        console.log("Fetched Bangalore Weather: " + bangaloreW)
        return [delhiW, bangaloreW]
}

const cherry = async () => {
        console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
        console.log("Welcome to weather control room")
        let a = await harry()
        let b = await cherry()

}
main1()
