// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = 'https://www.boredapi.com/api/activity/'


// sélectionner le btn
// écouter le click
// après click, fetch Bored API + afficher activité

const button = document.querySelector('.btn');
button.addEventListener('click', (event) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const activity = data.activity;

      const h2 = document.getElementById('activity');
      h2.innerText = activity;
    });
});


