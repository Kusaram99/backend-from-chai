import express from 'express';
// import {config} from 'dotenv'
import 'dotenv/config'
// config();
// import 'dotenv'

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




app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});