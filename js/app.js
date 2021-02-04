let searchString = "banana"
let api_object
let object
let postList

// app state

const TIMER_SPEED = 1000
const SEARCH_FORM = document.quer

let slideshowInterval = null;

const searchFormEl = document.querySelector("#searchForm")
const submitButtonEl = document.querySelector("#submitButton")
const stopButtonEl = document.querySelector("#stopButton")

function initializeState(){
    STOP
}

async function search(){
    api_object = await fetch(`http://www.reddit.com/search.json?q=${searchString}+nsfw:no`);  
    object = await api_object.json()
    postList = object.data.children


}

function processUrl(url){

return url.replace('amp;s', 's')

}

async function fetchReddit(e){
    e.preventDefault()
    console.log(e)

    try{
        const redditData = await fetch(`http://www.reddit.com/search.json?q=${searchFormEl.value}+nsfw:no`) 
    }
    catch(error){

        console.log(error)

    }
}

class Slide {
    constructor(post){
        this.imageUrl = processUrl(post.data.preview.images[0].source.url)
        console.log(this.imageUrl)
    }
}


function createSlide(post){
    return new Slide(post)
}

function searchAndDisplay(){

}

search();


let processedPosts = postList.map(createSlide)

