// Selecting the DOM
// alert("Meooow")
let form = document.querySelector("form");
let formInput = document.querySelector("#serve");
let title = document.querySelector("h2");
let image = document.querySelector("#fetchimage");



//Event Listeners

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    evVal = formInput.value;
    form.style.display = "none";
    formInput.style.display = "none";

    //Fetching the data

    async function fetchMeNot(){
        try{
            const fetchfetch = await fetch(`https://www.reddit.com/search.json?q=${evVal}+nsfw:no`);
            const showfetch = await fetchfetch.json();

            let fetchArr = showfetch.data.children;
            

            //loop over array to get title

            for (let i = 0; i < fetchArr.length; i++){
                title.innerText = fetchArr[i].data.title;
            }

            //loop over array to get image

            for (let i = 0; i < fetchArr.length; i++){
                image.src = fetchArr[i].data.thumbnail;
            }

        } catch(err) {
            console.log(err);
        }
    }
    fetchMeNot();
});


