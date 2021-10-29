const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("CLICK!");

  // Collect user input from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    // 'User.js' model will need to be created /models
    // 'userRoutes.js' will need to be created in /controllers/api
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect user to the homepage page
      // homepage.handlebars will need to be created
      document.location.replace('/homepage');
    } else {
      console.log("Failed to login. User not in database.");
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);