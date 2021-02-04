// Variables

// DOM References
let postContainer = document.querySelector("#post-container");
let form = document.querySelector("#search-form");
let input = document.querySelector("#input");

// Event Listeners
form.addEventListener("submit", search); // search is a callback function

// Functions
async function search(event) {
  event.preventDefault();
  let searchQuery = input.value;
  try {
    const allPosts = await fetch(
      `https://www.reddit.com/search.json?q=${searchQuery}`
    );
    const content = await allPosts.json();
    const posts = content.data.children;
    let postsArray = posts.map(function (post) {
        return {
        url: post[i].data.url,
        }
    });
    // .filter to remove posts that won't load
    // set interval
    // append postsArray to #post-container
    // on submit to make header/title go away
  } catch (err) {
    console.log("oh noooo");
  }
}

// function(json) {
//     clear();
//     let posts = json.data.children;
//     // loop over every post
//     for (let i = 0; i < posts.length; i++) {
//       let url = posts[i].data.url;
//       // Only accepts urls that end in .jpg .png or .gif

//       let lastFourChars = url.substring(url.length - 4, url.length);
//       if (
//         lastFourChars === ".jpg" ||
//         lastFourChars === ".gif" ||
//         lastFourChars === ".png}

function createPostCollage(url) {
  let divEl = document.createElement("div");
  let imgEl = document.createElement("img");
  imgEl.src = url;

  divEl.appendChild(imgEl);
  return divEl;
}
