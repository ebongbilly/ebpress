import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');

// Serve static files from the "public" directory
app.use(express.static('./public'))

//Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey Class', message: 'How fast can this system be?' });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: 'Dashboard' });
});

app.get('/posts', (req, res) => {
    res.render('posts', { title: 'Posts' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
