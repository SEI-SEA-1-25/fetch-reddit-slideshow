let infoReddit = document.querySelector(".wrap");
let submitButton = document.querySelector(".button");
let thumbnailImage = document.querySelector(".thumbnail");

submitButton.addEventListener("click", fetchReddit);

function fetchReddit() {
  let inputValue = document.querySelector("#input");

  fetch(`https://www.reddit.com/search.json?q=${inputValue.value}+nsfw:no`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const items = json.data.children;
      const randomItem = items[Math.floor(Math.random() * items.length)];

      const title = randomItem.data.title;
      const thumbnail = randomItem.data.thumbnail;
      console.log(thumbnail);
      infoReddit.innerText = title;
      if (thumbnail) {
        thumbnailImage.src = thumbnail;
      }
    });
}
