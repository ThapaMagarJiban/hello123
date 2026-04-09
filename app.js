const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const weblinks = [
  { id: 1, title: 'Google', url: 'https://google.com', rating: 5 },
  { id: 2, title: 'OpenAI', url: 'https://openai.com', rating: 4 },
  { id: 3, title: 'GitHub', url: 'https://github.com', rating: 5 },
  { id: 4, title: 'Facebook', url: 'https://facebook.com', rating: 3 },
];

let nextId = 5;

app.get('/', (req, res) => {
  res.json({
    message: 'Weblinks API is running.',
    api: 'http://localhost:3000/weblinks',
    apidoc: 'http://localhost:3000/apidoc',
  });
});

app.get('/weblinks', (req, res) => {
  res.json(weblinks);
});

app.get('/weblinks/filter/rating', (req, res) => {
  const min = Number.parseInt(req.query.min, 10) || 1;
  res.json(weblinks.filter((item) => item.rating >= min));
});

app.get('/weblinks/filter/com', (req, res) => {
  const filtered = weblinks.filter((item) => {
    if (typeof item.url !== 'string') return false;
    try {
      return new URL(item.url).hostname.toLowerCase().endsWith('.com');
    } catch {
      return false;
    }
  });
  res.json(filtered);
});

app.get('/weblinks/:id', (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const item = weblinks.find((link) => link.id === id);
  if (!item) {
    return res.status(404).json({ message: 'Weblink not found' });
  }
  res.json(item);
});

app.post('/weblinks', (req, res) => {
  const { title, url, rating } = req.body;
  if (!title || !url || rating === undefined) {
    return res.status(400).json({ message: 'title, url and rating are required' });
  }

  const newWeblink = {
    id: nextId++,
    title,
    url,
    rating: Number.parseInt(rating, 10),
  };

  weblinks.push(newWeblink);
  res.status(201).json(newWeblink);
});

app.put('/weblinks/:id', (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const index = weblinks.findIndex((link) => link.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Weblink not found' });
  }

  weblinks[index] = { ...weblinks[index], ...req.body };
  res.json(weblinks[index]);
});

app.delete('/weblinks/:id', (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  const index = weblinks.findIndex((link) => link.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Weblink not found' });
  }

  const [deleted] = weblinks.splice(index, 1);
  res.json({ message: 'Deleted successfully', deleted });
});

app.use('/apidoc', express.static(path.join(__dirname, 'A3-Task', 'assignment', 'docs')));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`API: http://localhost:${PORT}/weblinks`);
  console.log(`APIDoc: http://localhost:${PORT}/apidoc`);
});
