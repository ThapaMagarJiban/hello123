# Weblinks API

## Setup

```bash
npm install
npm start
```

`npm start` generates the API documentation and starts the server.

## Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | http://localhost:3000/weblinks | Show all weblinks |
| GET | http://localhost:3000/weblinks/:id | Show a specific weblink |
| POST | http://localhost:3000/weblinks | Add a new weblink |
| PUT | http://localhost:3000/weblinks/:id | Update a weblink |
| DELETE | http://localhost:3000/weblinks/:id | Delete a weblink |
| GET | http://localhost:3000/weblinks/filter/rating?min=4 | Display weblinks by rating |
| GET | http://localhost:3000/weblinks/filter/com | Display .com weblinks |

## API Documentation

After running `npm start`, open: **http://localhost:3000/apidoc**
