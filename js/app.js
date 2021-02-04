// ~app state~
const TIMER_SPEED = 1000
// variable to store set interval 
let slideshowInterval = null
// holds image urls from reddit 
let images = []
// index of the current slide
let imageIndex = 0

// ~DOM selectors~ 
const SEARCH_FORM  = document.querySelector('#search-form')
const SEARCH_INPUT = document.querySelector('#search-input')
const SUBMIT_BUTTON = document.querySelector('#submit')
const STOP_BUTTON = document.querySelector('#stop-button')
const SLIDESHOW_CONTAINER = document.querySelector('#pic-container')

SEARCH_FORM.addEventListener('submit', fetchReddit)
STOP_BUTTON.addEventListener('click', stopSlideshow)
STOP_BUTTON.style.display = 'none'
// ~functions~ 
async function fetchReddit(e) {
    e.preventDefault()
    try {
        // fetch user search from reddit 
        const redditData = await  fetch('http://www.reddit.com/search.json?q=' + SEARCH_INPUT.value + '+nsfw:no')
        const redditJson = await redditData.json()
        images = redditJson.data.children.map(function(child) {
            return {
                url: child.data.url,
                title: child.data.title
            }
        })
        images = images.filter(function(image) {
            const fileExtension = image.url.slice(-4)
            if(fileExtension === '.jpg' || fileExtension === '.png') return true
            return false
        })
        slideshowInterval = setInterval(changeSlide, TIMER_SPEED)
        changeSlide()
        STOP_BUTTON.style.display = 'inline'
        STOP_BUTTON.style.display = 'none'
    } catch(error) {
        console.log(error)
    }
}

// empties out containter div
function clearSlideshow() {
    while(SLIDESHOW_CONTAINER.firstChild) {
        SLIDESHOW_CONTAINER.removeChild(SLIDESHOW_CONTAINER.firstChild)
    }
}

// Callback for slideshow setInterval
function changeSlide(){
    if(imageIndex >= images.length) imageIndex = 0
    const imageEl = document.createElement('img')
    imageEl.src = images[imageIndex].url
    imageEl.alt = images[imageIndex].title
    
    SLIDESHOW_CONTAINER.appendChild(imageEl)
    // console.log(images[imageIndex])
    imageIndex++
}

function stopSlideshow() {
    SEARCH_FORM.style.display = 'block'
    STOP_BUTTON.style.display = 'none'
    images = []
    imageIndex = 0
    clearInterval(slideshowInterval)
    clearSlideshow()
}