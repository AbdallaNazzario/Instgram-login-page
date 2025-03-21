document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Basic validation
    if (username && password) {
      alert(`Username: ${username}\nPassword: ${password}`);
      // In a real-world scenario, you would send this data to a server for authentication.
    } else {
      alert('Please fill in all fields.');
    }
  });