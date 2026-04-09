const weblinks = [
  { id: 1, title: "Google",   url: "https://google.com",   rating: 5 },
  { id: 2, title: "OpenAI",   url: "https://openai.com",   rating: 4 },
  { id: 3, title: "GitHub",   url: "https://github.com",   rating: 5 },
  { id: 4, title: "Facebook", url: "https://facebook.com", rating: 3 },
];

let nextId = 5;
const getNextId = () => nextId++;

export default { weblinks, getNextId };