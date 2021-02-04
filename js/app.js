const redditUrl = "http://www.reddit.com/search.json?q=cats+nsfw:no";
const searchForm = document.getElementById("searchBar")
const submit = document.getElementById("searchButton")
let mainContainer = document.querySelector('#main-container')





fetch(redditUrl)
    .then((redditData) => {
        return redditData.json();
    })
    .then((jsonData) => {


        let data = jsonData.data.children;
        let randomData = data[Math.floor(Math.random() * data.length)];

        let title = randomData.data.title;
        let thumbnail = randomData.data.thumbnail;



        // let img = document.createElement(thumbnail);
        // mainContainer.innerText(img)

        // let img = document.createElement('img');
        // mainContainer.appendChild(img)

        // img.src =


        mainContainer.innerText = title;


        mainContainer.appendChild(thumbnail)
    })

// const createData = (data) => {
//     let div = document.createElement('div')
//     let h2El = document.createElement('h2')
//     h2El.textContent = data;
//     div.appendChild(h2El)

//     return div
// }

// createData()




    // Notes
    // 1. return the fetch data w/ redditData
    // Need to append the ${img}.jpg