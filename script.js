document.getElementById('registrationForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const userData = {
      username: document.getElementById('username').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value
    };
  
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (response.ok) {
        document.getElementById('message').textContent = 'Registration successful!';
        document.getElementById('registrationForm').reset();
      } else {
        document.getElementById('message').textContent = 'Registration failed. Please try again.';
      }
    } catch (error) {
      document.getElementById('message').textContent = 'An error occurred. Please try again.';
    }
  });