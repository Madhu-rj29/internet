// Function to handle form submission (login)
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get username and password from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Make a request to the server to authenticate the user
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Authentication successful, display the name section
            document.getElementById('nameSection').style.display = 'block';
        } else {
            // Authentication failed, display an error message
            alert('Login failed. Please check your username and password.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while trying to log in. Please try again later.');
    });
});

// Function to get name from server
function getMyName() {
    // Make a request to the server to get the name
    fetch('/getname')
    .then(response => response.json())
    .then(data => {
        document.getElementById('name').textContent = data.name;
        document.getElementById('surname').textContent = data.surname;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while trying to retrieve the name.');
    });
}

// Function to send surname to server
function postSurname() {
    // Make a request to the server to send the surname
    var surname = document.getElementById('surname').textContent;
    fetch('/postsurname', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ surname: surname })
    })
    .then(response => {
        if (response.ok) {
            alert('Surname sent successfully.');
        } else {
            alert('Failed to send surname.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while trying to send the surname.');
    });
}
