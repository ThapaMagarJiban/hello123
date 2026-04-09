import express from 'express';
import weblinksRouter from './routes/weblinks.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/weblinks', weblinksRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Weblinks API. Visit /weblinks to get started.' });
});

app.listen(3000, () => {
  console.log('Weblinks API running on http://localhost:3000');
});