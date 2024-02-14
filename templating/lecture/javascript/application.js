import Mustache from 'mustachejs';
import { createApp } from "vue";

const movieCardTemplate = document.querySelector('#movieCard');
const moviesList = document.querySelector('#results');

fetch("http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7")
  .then(response => response.json())
  .then((data) => {
    const movies = data.Search;

    movies.forEach((movie) => {
      // Native template

      // const clone = movieCardTemplate.textContent.cloneNode(true);

      // clone.querySelector("img").src = movie.Poster
      // clone.querySelector("h6").textContent = movie.Title
      // clone.querySelector("p").textContent = movie.Year
      // clone.querySelector("a").href = `https://www.imdb.com/title/${movie.imdbID}`
      // results.appendChild(clone);

      
      // Mustache.js
      const clone = movieCardTemplate.innerHTML;
      
      const movieCard = Mustache.render(clone, movie);
      moviesList.insertAdjacentHTML('beforeend', movieCard);
    });
  });


// Vue.js

createApp({
  data() {
    return {
      message: "Hello Batch 1526"
    }
  }
}).mount('#results')
