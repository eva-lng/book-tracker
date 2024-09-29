# book tracker
project intro/description

### Tech used
![Static Badge](https://img.shields.io/badge/EJS-%23B4CA65?style=for-the-badge&logo=ejs&logoColor=white)
EJS, Bootstrap, Node.js, Express, MongoDB, Passport

### Link to the project

## Getting started
### Prerequisities
This app uses [NPM](https://www.npmjs.com) to manage its dependences and packages. The following dependencies are required to run this app:
- [Node.js](https://nodejs.org/en): This application relies on Node.js to run the server.
- [MongoDB](https://www.mongodb.com) or [MongoDB Atlas](https://www.mongodb.com/atlas): A MongoDB database is required for data storage. A local instance of MongoDB or a cloud instance through MongoDB Atlas can be used.
- [Google Books API Key](https://developers.google.com/books): An API key from Google Books is necessary to enable the app’s book search functionality.

### Installation
1. Clone the repo
```
git clone https://github.com/eva-lng/book-tracker.git
```
2. Navigate to the project directory
```
cd <project-directory>
```
3. Install dependencies
```
npm install
```
4. To set up environment variables, create a `.env` file in the root of the project with the following content:
```
PORT = 3000
DB_STRING = mongodb_connection_string
GOOGLE_BOOKS_API_KEY = api_key
```
- replace `mongodb_connection_string` with your own MongoDB connection string (e.g., from MongoDB Atlas)
- replace `api_key` with your own Google Books API key  
5. Start the app
```
npm run dev
```

## Features


## Optimizations
Planned future optimizations could include:


## Lessons Learned
