const url = "https://wagon-garage-api.herokuapp.com/vroomvroom/cars";

const displayCar = (car) => {
  const brand = car.brand;
  const owner = car.owner;
  const model = car.model;
  const plate = car.plate;
  
  const html = `
  <div class="car">
    <div class="car-image">
      <img src="http://loremflickr.com/280/280/${brand}${model}" />
    </div>
    <div class="car-info">
      <h4>${brand} ${model}</h4>
      <p><strong>Owner:</strong>${owner}</p>
      <p><strong>Plate:</strong>${plate}</p>
    </div>
  </div>`
  carsList.insertAdjacentHTML("beforeend", html)
};

// GET all cars

// enregistrer URL dans une variable
// fetch 
// parser le fetch (.then)
// recuperer la data
// inserer la data dans le HTML

const carsList = document.querySelector(".cars-list");

fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.forEach((car) => {
      displayCar(car);
    })
  });


// POST a car

// selectionner le car form
// ecouter le submit 
// récuperer les valeurs des Inputs
// mettre les variables dans un objet
// fetch => methode POST
// stringifier notre variable
// afficher notre nouvelle voiture : displayCar

const form = document.querySelector(".car-form");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const inputs = document.querySelectorAll(".form-control");

  const carData = {};

  inputs.forEach((input) => {
    const inputName = input.name;
    const inputValue = input.value;

    carData[inputName] = inputValue;
  });

  fetch(url, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(carData)
  })
    .then(response => response.json())
    .then((data) => {
      displayCar(data);
    });
});

