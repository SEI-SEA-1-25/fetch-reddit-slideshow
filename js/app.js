console.log('Linked....')
let body = document.querySelector('body')






let url = "https://www.reddit.com/search.json?q=dog"
fetch(url)
  .then((responseData) => {
      return responseData.json();
  })
  .then((results)=>{
    
      console.log(results)
      
      let title = results.data.children
      let imag = results.data.children[5].data.thumbnail;
      

       title.forEach((childrenArr) => {
            let thumbnail = childrenArr.data.thumbnail
            body.innerHTML = title
      })
      
       // body.innerText = cat
    
  })