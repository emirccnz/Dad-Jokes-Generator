const findInput = document.querySelector("#jokes")
const findButton = document.querySelector("#anotherJoke")

findButton.addEventListener("click",gettingData)


function gettingData(e){
    
    fetch("https://icanhazdadjoke.com",{
    
        headers: {Accept : "application/json"}
    })

    .then((data)=> data.json())
    .then((res)=> {
        const joke = res.joke
        findInput.value = joke
    })
    .catch((err)=> console.log(err))
    findButton.textContent = "One more..."
}