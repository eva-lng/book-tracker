# book tracker
This app is a book-tracking tool that helps users organize books they’ve read or want to read and keep track of their favorite quotes.

## About
The Book Tracker app allows users to categorize books into custom "shelves" (e.g., "To Read," "Currently Reading," or "Read") to keep their reading organized. Users can also save favorite quotes from any book to revisit later. With integrated Google Books API functionality, users can search for books directly within the app and easily add them to their collection. The app uses MongoDB for data storage and Passport for secure user authentication.

### Tech used
![Static Badge](https://img.shields.io/badge/EJS-%23B4CA65?style=for-the-badge&logo=ejs&logoColor=white)
![Static Badge](https://img.shields.io/badge/Bootstrap-%237952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Static Badge](https://img.shields.io/badge/Node.js-%235FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Static Badge](https://img.shields.io/badge/Express.js-%23000000?style=for-the-badge&logo=express&logoColor=white)
![Static Badge](https://img.shields.io/badge/MongoDB-%2347A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Static Badge](https://img.shields.io/badge/Passport-%2334E27A?style=for-the-badge&logo=passport&logoColor=white)

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

## Optimizations
Planned future improvements include:
- **Enhanced Shelf Customization:** Allow users to create and name their own book shelves, beyond the three pre-set options.
- **Improved Search Filters:** Add filters to refine search results by author or publication date, making it easier for users to find specific types of books
- **Improved User Authentication:** A "Forgot Password" feature allows users to securely reset their password by sending a reset link to their registered email. Additionally users can sign up or log in with their Gmail account.
- **Quote Categorization:** Enable users to categorize saved quotes by theme, author, or book, and add a search or filter function to easily locate specific quotes.
- **Reading Progress Tracker:** Introduce a progress-tracking feature where users can log their reading progress (e.g., pages read, percentage completion) and set reading goals.
- **User Sharing:** Allow users to share their custom book shelves with other registered users, allowing them to view or customize their reading lists. 

## Lessons Learned
Bulding the Book Tracker app provided valuable insights into full-stack development, particularly in the areas of user authentication, database management and application architecture. Key takeaways include:
- **User Authentication:** Secure user login and session handling with Passport
- **Database Design:** Effective schema design and querying for data management with Mongoose and MongoDB
- **MVC Architecture:** Organized code with clear separation of concerns
- **EJS Templating:** Creation of responsive, data-driven pages using server-side rendering
- **Backend Development:** Improved proficiency in routing, middleware, and handling HTTP requests using Node.js and Express