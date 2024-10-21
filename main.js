//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// we need to have the photo and images displayed separately
//we could display it from the javascript
document.querySelector('button').addEventListener('click', getPic)


function getPic(){ 

document.querySelector('#vid').src = ""
document.querySelector('img').src = ""

const picOfDay = document.querySelector('#pod').value

      const url = `https://api.nasa.gov/planetary/apod?api_key=7pEHtUi7k8A6ju9wX3M9o5gtfN4AdirKD4tNdwwj&date=${picOfDay}`


  // fetch goes inside the function so it doesnt run right away!
    fetch(url)//reassign the link to something else for ease of access
    .then(res => res.json())//response comes from the fetch above to make it more readable
    .then(data =>{
      console.log (data)//data come from the response abve
      
      document.querySelector('h2').innerText = data.title
      document.querySelector('p').innerText = data.explanation

    //  if (picOfDay === undefined){
    //   document.querySelector('h3').innerText = data.msg
    //   console.log(data.msg)
    //  }

// // document.querySelector(h3).innerText = ""


//we want to say if the media type is video, show the ivdeo but hide the img
//also the same visa versa

if(data.media_type === 'video'){
  // document.querySelector('img').src = data.hdurl //.src goes instead of innerText - its an image.
      document.querySelector('#vid').src = data.url
      document.querySelector('#vid').classList.remove('hidden') 
      document.querySelector('img').classList.add('hidden')
}else{
  document.querySelector('img').src = data.hdurl //.src goes instead of innerText - its an image.
  document.querySelector('img').classList.remove('hidden') 
  document.querySelector('#vid').classList.add('hidden')
}


    })
.catch(err => {
    console.log(`error ${err}`)
});
// console.log(picOfDay)
}

//https://apod.nasa.gov/apod/ap240630.html




// url=''

// .fetch(url)
// .then(res => res.json())


