import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import weblinksRouter from './routes/weblinks.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/weblinks', weblinksRouter);
app.use('/apidoc', express.static(path.join(__dirname, 'docs')));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Weblinks API. Visit /weblinks and /apidoc.' });
});

app.listen(3000, () => {
  console.log('Weblinks API running on http://localhost:3000');
  console.log('API Docs available at http://localhost:3000/apidoc');
});
