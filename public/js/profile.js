const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#mural-name').value.trim();
  const needed_funding = document.querySelector('#mural-funding').value.trim();
  const description = document.querySelector('#mural-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/murals`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create mural');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/murals/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete mural');
    }
  }
};

document
  .querySelector('.new-mural-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.mural-list')
  .addEventListener('click', delButtonHandler);
