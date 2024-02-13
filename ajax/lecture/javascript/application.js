import Swal from 'sweetalert2';


const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = form.querySelector('#email');
  const password = form.querySelector('#password');

  const credentials = {
    email: email.value,
    password: password.value,
  }

  const url = 'https://reqres.in/api/register';

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials)
  })
  .then((response) => {
    if (response.status === 200) {
      Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
    } else {
      Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
    }
  })
});
