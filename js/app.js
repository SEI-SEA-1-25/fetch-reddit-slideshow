const TIMER_SPEED = 1000
let slideshowInterval = null
let images = []
let imageIndex = 0

const SUBMIT_INPUT = document.getElementById("searchButton")

const redditUrl = "http://www.reddit.com/search.json?q=";


let mainContainer = document.querySelector('#main-container')



// Fetch user query from reddit
const fetchReddit = (event) => {
    event.preventDefault()

    const searchForm = document.getElementById("searchBar").value

    if (searchForm) {
        fetch(redditUrl + searchForm)
            .then((redditData) => {
                return redditData.json()
            })
            .then((jsonData) => {
                let data = jsonData.data.children;
                img = data.map(function (child) {
                    return {
                        url: child.data.url,
                        title: child.data.title,
                    }

                })
                images = img.filter(function (image) {
                    const fileExtension = img.url.slice(-4)
                    if (fileExtension === '.jpg' || fileExtension === '.png') return true
                    return false
                })
                console.log(img)
            })


    }
}


const createSlideshow = () => {
    if (imageIndex >= images.length) imageIndex = 0
    const imgEl = document.createElement('img')
    imgEl.src = images[imageIndex].url
    imgEl.alt = images[imageIndex].title

    SLIDESHOW_CONTAINER.appendChild(imgEl)
    imageIndex++
}

createSlideshow()





// let img = document.createElement(thumbnail);
// mainContainer.innerText(img)

// let img = document.createElement('img');
// mainContainer.appendChild(img)

// img.src =









    // Notes
    // 1. return the fetch data w/ redditData
    // Need to append the ${img}.jpg