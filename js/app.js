// Hide Title and search box
// Display slideshow (with DOM manipulation)
// Show button to reset animation
// Repeat until user clicks reset
// Return to original site state when reset button is clicked
// let slideshowTimer = window.setInterval(search, 5000);

// function myCallback(a, b)
// {
//  // Your code here
//  // Parameters are purely optional.
//  console.log(a);
//  console.log(b);
// }
let slideshowTimer = window.setInterval(search, 5000);


//DOM references
let slideshowContainer = document.querySelector('#slideshow-container');
let form = document.querySelector('#search-form')
let input = document.querySelector('#input')

//event listeners
form.addEventListener('submit', search)

// functions
function search(event) {
//     event.preventDefault();
    let searchQuery = input.value + "_pictures";
    fetch(`https://www.reddit.com/search.json?q=${searchQuery}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        clear();
        let posts = json.data.children;

        function randPic(picture) {
                return picture[Math.floor(Math.random()*posts.length)];
        }
        var newPicture = randPic(posts)
        console.log(newPicture.data.url)
        // for (let i = 0; i < posts.length; i++) {
        let url = newPicture.data.url;
        let lastFourChars = url.substring(url.length - 4, url.length)
        if(lastFourChars === '.jpg' || lastFourChars === '.png') {
        
                let divEl = createPost(url);
                slideshowContainer.appendChild(divEl);
                slideshowTimer;
        } else {
                search(event)
        }
        
    })
}




function clear() {
        // while the post-container still has child divs, remove the first child.
    while(slideshowContainer.firstChild) {
         slideshowContainer.removeChild(slideshowContainer.firstChild)
    }
}

//This function creates our div and returns it based on the passed in data
function createPost(url) {
        let divEl = document.createElement('div');
        let imgEl = document.createElement('img');
        imgEl.classList.add("new-picture");
        
        imgEl.src = url;

        divEl.appendChild(imgEl);
        return divEl;
        //return a div back
    }