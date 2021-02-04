let test = document.getElementById("test");
let testButton = document.getElementById("testButton");

async function testData() {
  const response = await fetch("https://www.reddit.com/r/cats/.json");

  const data = await response.json();

  //testdata below
  test.innerText = data.data.children[0].data.title;
}
testButton.addEventListener("click", testData);

// let kquote = document.getElementById("kquote");
// let resetButton = document.getElementById("reset");

// function getQuote() {
//   fetch("https://api.kanye.rest/")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (json) {
//       let posts = json.quote;
//       console.log(posts);

//       kquote.innerText = posts;
//     });
// }

// resetButton.addEventListener("click", getQuote);
