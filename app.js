
let form = document.getElementById("search-form");
let searchBar = document.getElementById("input") 
form.addEventListener('submit', userSearch)
let displayMsg = document.querySelector('.message')
let mainImg = document.getElementById('main-img')
let pageBody = document.querySelector('.main-container')




function userSearch(event){
    event.preventDefault();
    changePic();
    
    
    async function loadInfo() {
        let userQuery = searchBar.value
        let searchQuery = "https://www.reddit.com/search.json?q=" + userQuery + "+nsfw:no"
        
        const response = await fetch(searchQuery);
        const jsonFile = await response.json();

        let array = jsonFile.data.children
    
        let urls = array.map(function(item){
            return item.data.url
        })

        let filteredUrls = urls.filter(function(item){
            return item.includes('.jpg') ||  item.includes('.png')
            
        })


        randomUrl = filteredUrls[Math.floor(filteredUrls.length * Math.random())];

            console.log(randomUrl)

        let picEl = document.createElement('img')
            picEl.src = randomUrl;
            mainImg.appendChild(picEl)
            
           displayMsg.style.display = "none";
        
            console.log(leftPicEl)
        
        
    }

    loadInfo();
    
}
    
function changePic() {
    while(mainImg.firstChild) {
       mainImg.removeChild(mainImg.firstChild);
       displayMsg.style.display = null;
    }
 }

document.addEventListener('click', changePic)

    
    //DOM Manipulation

//  function createPost(url, title, subreddit) {
//     let divEl = document.createElement('div');
//   let imgEl = document.createElement('img');
//     imgEl.src = url;
