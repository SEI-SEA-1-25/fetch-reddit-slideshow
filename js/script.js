let form = document.querySelector("#form");
let inputText = document.querySelector("#text");
let inputButton = document.querySelector("#button");
let galleryEl = document.querySelector("#picture-container");
let remove = document.querySelector("#remove");

form.addEventListener("submit", fetchPictures);

async function fetchPictures(event) {
  event.preventDefault();
  //try
  let search = inputText.value;
  const response = await fetch(
    `http://www.reddit.com/search.json?q=${search}+nsfw:no`
  );
  const content = await response.json();
  clear();
  let posts = content.data.children;
  console.log(posts);
  let mapPosts = posts.map(function (children) {
    return children.data.url;
  });

  let filterPosts = mapPosts.filter(function (url) {
    let lastFourChars = url.substring(url.length - 4, url.length);
    if (
      lastFourChars === ".jpg" ||
      lastFourChars === ".gif" ||
      lastFourChars === ".png"
    ) {
      return true;
    }
  });

  console.log(filterPosts);

  let create = document.createElement("img");
  create.src = filterPosts[0];
  document.querySelector("#picture-container").appendChild(create);
  function removeForm() {
    remove.removeChild(form);
  }
  removeForm();

  replaceForm();
}
function replaceForm() {
  let newForm = document.createElement("form");
  newForm.id = "new-form";
  let stopButton = document.createElement("button");
  stopButton.id = "stop";
  stopButton.type = "submit";
  stopButton.innerText = "Stop";
  newForm.appendChild(stopButton);
  remove.appendChild(newForm);
}
function clear() {
  while (galleryEl.firstChild) {
    galleryEl.removeChild(galleryEl.firstChild);
  }
}

//function slide () {}
// catch (err) {
//     clear();
//     console.log("oh noooo");
//   }
