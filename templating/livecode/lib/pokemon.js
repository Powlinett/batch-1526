// TODO write your code here
// Définir l'url de l'api
// Fetch
// .then et parser la réponse
// itérer sur chacun des pokémon
// sélectionner le template
// cloner le template
// Remplir le clone avec les infos du pokémon
// Injecter dans la div cards container

const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

const container = document.querySelector("#cardsContainer");
const template = document.getElementById("cardTemplate");

const displayPokemonCard = (pokemon, url) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector("h5").textContent = pokemon.name;
  clone.querySelector(".pokemon-card-image").src = pokemon.sprites.front_default;
  clone.querySelector('a').href = url;
  clone.querySelector('a').innerText = 'infos';


  clone.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault();

    const infoTemplate = document.querySelector('#infoTemplate');
    const infoClone = infoTemplate.content.cloneNode(true);

    infoClone.querySelector("h5").textContent = pokemon.name;
    infoClone.querySelector(".pokemon-card-image").src = pokemon.sprites.front_default;

    const infoContainer = document.querySelector('#infoContainer');

    infoContainer.innerHTML = '';
    infoContainer.appendChild(infoClone);
  });

  container.appendChild(clone);
};

const getPokemonData = (url) => {
  fetch(url)
  .then((response) => response.json())
  .then((pokemonData) => {
    displayPokemonCard(pokemonData, url)
  });
}

fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.results.forEach((result) => {
      getPokemonData(result.url);
    });
  });
