import express from 'express';
import 'dotenv/config'


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/login', (req, res) => {
    res.send('<h1>Login Page</h1>');
});

app.get('/register', (req, res) => {
    res.send('<h1>Register Page</h1>');
});




app.listen(3000, () => {
    console.log('Server is running on port ' + PORT);
});