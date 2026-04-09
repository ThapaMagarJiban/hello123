import store from '../data/weblink.js';

// Get All Weblinks
export const getAllWeblinks = (req, res) => {
  res.json(store.weblinks);
};

// Get by Min Rating
export const getWeblinksByRating = (req, res) => {
  const min = parseInt(req.query.min) || 1;
  const filtered = store.weblinks.filter(w => w.rating >= min);
  res.json(filtered);
};

// Get only .com Weblinks
export const getDotComWeblinks = (req, res) => {
  const filtered = store.weblinks.filter(w => {
    if (typeof w.url !== 'string') return false;
    try {
      const hostname = new URL(w.url).hostname.toLowerCase();
      return hostname.endsWith('.com');
    } catch {
      return false;
    }
  });
  res.json(filtered);
};

// Get by ID
export const getWeblinkById = (req, res) => {
  const link = store.weblinks.find(w => w.id === parseInt(req.params.id));
  if (!link) {
    return res.status(404).json({ message: 'Weblink not found' });
  }
  res.json(link);
};

// Create Weblink
export const createWeblink = (req, res) => {
  const { title, url, rating } = req.body;
  if (!title || !url || !rating) {
    return res.status(400).json({ message: 'title, url and rating are required' });
  }
  const newLink = {
    id: store.getNextId(),
    title,
    url,
    rating: parseInt(rating),
  };
  store.weblinks.push(newLink);
  res.status(201).json(newLink);
};

// Update Weblink
export const updateWeblink = (req, res) => {
  const index = store.weblinks.findIndex(w => w.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Weblink not found' });
  }
  store.weblinks[index] = { ...store.weblinks[index], ...req.body };
  res.json(store.weblinks[index]);
};

// Delete Weblink
export const deleteWeblink = (req, res) => {
  const index = store.weblinks.findIndex(w => w.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ message: 'Weblink not found' });
  }
  const deleted = store.weblinks.splice(index, 1);
  res.json({ message: 'Deleted successfully', deleted: deleted[0] });
};
