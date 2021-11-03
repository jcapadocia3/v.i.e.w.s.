const reviewHandler = async (event) => {
    console.log("CLICK!");
    event.preventDefault();
    // document.location.replace('/home');
  
    // Collect values from the login form
    const rating1 = document.querySelector('#rating1');
    const rating2 = document.querySelector('#rating2');
    const rating3 = document.querySelector('#rating3');
    const rating4 = document.querySelector('#rating4');
    const rating5 = document.querySelector('#rating5');
    const comment = document.querySelector('#commentInput').value.trim();
  
    if (rating1 && comment) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ rating1, comment }),
        headers: { 'Content-Type': 'application/json' },
      })
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        console.log("111");
      } else {
        alert(response.statusText);
      }
    } else if (rating2 && comment) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ rating2, comment }),
        headers: { 'Content-Type': 'application/json' },
      })
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        console.log("222");
      } else {
        alert(response.statusText);
      }
    } else if (rating3 && comment) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ rating3, comment }),
        headers: { 'Content-Type': 'application/json' },
      })
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        console.log("333");
      } else {
        alert(response.statusText);
      }
    } else if (rating4 && comment) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ rating4, comment }),
        headers: { 'Content-Type': 'application/json' },
      })
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        console.log("444");
      } else {
        alert(response.statusText);
      }
    } else if (rating5 && comment) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ rating5, comment }),
        headers: { 'Content-Type': 'application/json' },
      })
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        console.log("555");
      } else {
        alert(response.statusText);
      }
    } 
  };


document
  .querySelector('.reviewForm')
  .addEventListener('submit', reviewHandler);
  
// WEB API - AJAX call + functions to follow:
// declare API variables:
apiKey = '5ht1h6zfn446h3vl2t1a4n2p7';
const queryURL = 'https://data.cityofchicago.org/resource/we8h-apcf.json' + apiKey;
const userSearch = '';
const myData = undefined;

// decalre variables based on html
const searchMuralBtn = $('mural-search-button');
const table = $(".table-section");