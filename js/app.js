let searchBtn = document.querySelector("#search-btn"); 
var inputSearch = document.querySelector("#search-area")
var resetBtn = document.querySelector("#reset-button")
let imageSource = null;
let imageDisplay = document.createElement("img")
let divEl = document.getElementById("display");
let description = document.querySelector("#description")
var interval = null;

resetBtn.style.display = "none";

searchBtn.addEventListener('click', function() {
    async function fetchData() {
        let userInput = document.querySelector("#search-area").value;
        if (userInput === '') {
            alert ("What do you want to search?")
            return
        }
        const response = await fetch(`https://www.reddit.com/search.json?q=${userInput}+nsfw:no`);
        const json = await response.json();
        
        let imageArr = [];
        for (let i=0; i < json.data.children.length; i++){
            imageSource = json.data.children[i].data.url;
            let lastFourChars = imageSource.substring(imageSource.length - 4, imageSource.length)
            if (lastFourChars === '.jpg' || lastFourChars === '.gif' || lastFourChars === '.png') {
                imageArr.push(imageSource)
            }
        }
        searchBtn.style.display = "none";
        inputSearch.style.display = "none";
        resetBtn.style.display = "block";
        description.style.display = "none";
        
        var a = 1;
        imageDisplay.src = imageArr[0]
        divEl.appendChild(imageDisplay)
        interval = setInterval(function() {
                imageDisplay.src = imageArr[a]
                divEl.appendChild(imageDisplay);
                a++
                if (imageArr.length <= a) {
                    clearInterval(interval)
                }
            }, 5000)
    }
    fetchData();
})

resetBtn.addEventListener('click', function() {
    searchBtn.style.display = "block";
    inputSearch.style.display = "block";
    resetBtn.style.display = "none";
    description.style.display = "block";
    imageDisplay.src = '';
    divEl.appendChild(imageDisplay)
    clearInterval(interval)
    description.style.textAlign = "center";
})











