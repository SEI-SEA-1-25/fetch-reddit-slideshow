// App State
const TIMER_SPEED = 1000;
//variable to store setInterval
// starts null because the slideshow doesn't begin until after submit
let slideShowInterval = null;
// holds image urls from reddit
// starts empty for the same reason
let images = [];
// index of the current image slide
let imageIndex = 0;

// DOM References
const SLIDESHOW_CONTAINER = document.querySelector("#post-container");
const SEARCH_FORM = document.querySelector("#search-form");
const SEARCH_INPUT = document.querySelector("#input");
const SUBMIT_BUTTON = document.querySelector("#submit");
const STOP_BUTTON = document.querySelector("#stop-button");

// Event Listeners
SEARCH_FORM.addEventListener("submit", fetchReddit); // search is a callback function
STOP_BUTTON.addEventListener("click", stopSlideShow);
STOP_BUTTON.style.display = "none";
// Functions
// fetch user query from reddit
async function fetchReddit(e) {
  e.preventDefault();
  //   let searchQuery = SEARCH_INPUT.value;
  console.log(`searching for ${SEARCH_INPUT.value}`);
  try {
    const redditData = await fetch(
      `https://www.reddit.com/search.json?q=${SEARCH_INPUT.value}`
    );
    const redditJson = await redditData.json();
    images = redditJson.data.children.map(function (child) {
      return {
        url: child.data.url,
        title: child.data.title,
      };
    });
    images = images.filter(function (image) {
      const fileExtension = image.url.slice(-4);
      // console.log(fileExtension)
      // "if" one-liner doesn't need {}
      if (fileExtension === ".jpg" || fileExtension === ".png") return true;
      return false;
    });
    slideShowInterval = setInterval(changeSlide, TIMER_SPEED);
    changeSlide();
    STOP_BUTTON.getElementsByClassName.display = "inline";
    SEARCH_FORM.getElementsByClassName.display = "none";
  } catch (err) {
    console.log("oh noooo");
  }
}

// empties out the container div
function clearSlideShow() {
  while (SLIDESHOW_CONTAINER.firstChild) {
    SLIDESHOW_CONTAINER.removeChild(SLIDESHOW_CONTAINER.firstChild);
  }
}

// callback function for slideshow setInterval
function changeSlide() {
  // look at image at the image index
  // wrap imageIndex so it resets when it runs out of pictures
  clearSlideShow();
  if (imageIndex >= images.length) imageIndex = 0;
  const imageEl = document.createElement("img");
  // . = style, not attribute
  imageEl.src = images[imageIndex].url;
  imageEl.alt = images[imageIndex].title;

  SLIDESHOW_CONTAINER.appendChild(imageEl);
  //   console.log(images[imageIndex]);
  imageIndex++;
}

// stops the slideshow and waits for a new user input
function stopSlideShow() {
  // hide UI elements
  SEARCH_FORM.style.display = "block";
  STOP_BUTTON.style.display = "none";
  // reset state to prevent bugs
  images = [];
  imageIndex = 0;
  clearInterval(slideShowInterval);
  clearSlideShow();
}
