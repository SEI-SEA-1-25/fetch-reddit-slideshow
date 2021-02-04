
// Variables
let postContainer = document.querySelector('#post-container');
let form = document.querySelector('#search-form');
let input = document.querySelector('#input');

// event listeners
form.addEventListener("submit", search);

// functions

function search(event) {
    event.preventDefault();
    let search = input.value;
    fetch(`https://www.reddit.com/search.json?q=${search}+nsfw:no`)
        .then(function(response) {
           return response.json();
        })
        .then(function(json) {
            //console.log(json);
            let posts = json.data.children; 
            // console.log(posts);
            
            let randomPost = posts[Math.floor(Math.random() * posts.length)];
            console.log(randomPost);
            let title = randomPost.data.title;
            let thumbnail = randomPost.data.thumbnail;   
            // Only accept urls that end in .jpg, .png, or .gif
            if(thumbnail === '.jpg' || thumbnail === '.gif' || thumbnail === '.png') {
                let divEl = makePost(url);
                postContainer.appendChild(divEl)
            }
        })
}

function makeePost(url) {
    let divEl = document.createElement("div");
    let imgEl = document.createElement("img");
    imgEl.src = url;
  
    divEl.appendChild(imgEl);
    return divEl;
  }

// async function search(event) {
//   event.preventDefault();
//   let search = form.value; // create array of books
//   try {
//     // try catch
//     const response = await fetch(`https://www.reddit.com/search.json?q=${search}+nsfw:no`);
//     const content = await response.json();
//     const posts = content.data.children;
//     console.log(posts);

//     // function randomCat(cats) {
//     //     return cat[Math.floor(Math.random() * cat.length)];
//     //   }
//     //   let newCat = randomCat(cats);

//     // console.log(cat);
//     // console.log(booksArray)
//     // let divEl = creatBookList(booksArray[0].title, booksArray[0].author);
//     // bookBox.appendChild(divEl);
//   } catch (err) {
//     // .filter no relevant result
//     console.log("mistake");
//   }
// }



