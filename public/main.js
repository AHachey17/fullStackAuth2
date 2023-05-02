var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
let movieTitle = document.querySelector('#movieTitle')
const revealBtn = document.querySelector('#revealBtn')
const randomBtn = document.querySelector('#randomBtn')

console.log(revealBtn)
console.log(randomBtn)

const movies = ["https://giphy.com/embed/GA1sltMVrl4YJgMyh5", "https://giphy.com/embed/3o7aTp12gDff2llvfW", "https://giphy.com/embed/ZCU3YxmmD8lh6savbB", "https://giphy.com/embed/1x5PlNYHFkyL6", "https://giphy.com/embed/keTwQbbQwlNM2RNJsW", "https://giphy.com/embed/FydqYa93YtubC", "https://giphy.com/embed/44lnMVc88NugM", "https://giphy.com/embed/14ceV8wMLIGO6Q", "https://giphy.com/embed/jqVvLlshi2p8Y", "https://giphy.com/embed/TLjKs6uCH5A8U"]

let titles = ["The Godfather", "Mean Girls", "The Dark Knight", "The Lord of the Rings: The Fellowship of the Ring", "Forrest Gump", "Star Wars", "The Emperor's New Groove", "Training Day", "Dairy of A Mad Black Woman", "The Notebook"]

let randomMovieIndex = Math.floor(Math.random() * movies.length)
console.log(movies)

function randomizer() { 
    randomMovieIndex = Math.floor(Math.random() * movies.length)
    console.log(randomMovieIndex)
    document.querySelector('#movie').src = movies[randomMovieIndex]

    console.log(movie.src)
    console.log(movies[randomMovieIndex])
}

randomBtn.addEventListener('click', randomizer)

function answer(){
  let randomTitle = titles[randomMovieIndex]
  movieTitle.innerText = randomTitle

  console.log(randomTitle)
}

revealBtn.addEventListener('click', answer)




Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    fetch('messages/thumbDown', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbDown':thumbDown
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});



/* Array.from(movies).forEach(function(element) {
  element.addEventListener('click', function(e){
    const _id = e.target.dataset.id
    fetch('movies', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
}); */



/* Array.from(giphy).forEach(function(element) {
  element.addEventListener('click', function(){
    const gifImage = document.querySelector('.movie-giphy')
    const searchQuery = 'movie'
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=DHMRnWj25U9Xolkv4dhEHTUTRZs9kD7K&tag=${searchQuery}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        gifImage.src = data.data.image_url
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
}); */