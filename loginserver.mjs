import express from 'express';

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample user data (replace with your actual authentication logic)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the provided username and password match any user
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Endpoint to get name (replace with your actual logic)
app.get('/getname', (req, res) => {
    // For demonstration, just send a sample name and surname
    res.json({ name: 'John', surname: 'Doe' });
});

// Endpoint to receive surname
app.post('/postsurname', (req, res) => {
    const { surname } = req.body;
    // Handle the surname as needed
    console.log('Received surname:', surname);
    res.sendStatus(200);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
