# User Authentication with Express.js and React.js

This repository demonstrates a comprehensive user authentication system implemented using Express.js for the backend and React.js for the frontend. It provides a solid foundation for securing web applications and includes the following features:

* `User Registration:` Allow users to create accounts with secure password storage.

* `User Login:` Enable secure login for registered users with token-based authentication.

* `Token Management:` Manage user sessions and secure API access with JWT (JSON Web Tokens).

* `Password Hashing:` Safely store user passwords using bcrypt for hashing.

* `Middleware:` Implement middleware for route protection and authentication checks.

* `Protected Routes:` Control access to certain routes and components based on user authentication status.

* `API Integration:` Illustrate how to connect the React frontend to the Express.js backend using Axios.

This repository serves as a valuable resource for developers looking to implement user authentication in their Express.js and React.js applications. It offers clear code examples and best practices for building secure and user-friendly web experiences.

Feel free to explore, learn, and adapt this authentication system to your specific project needs.

## Back End

[Back-End](express-backend/BACKEND.md)

* Node version `v19.1.0`
* Npm version `9.6.7`
* If you need all the authentication in the same file `"main": "index.js",` to `server.js`

#### Set-up

* cd react-backend
* npm install
* node index.js
* port - `http://localhost:4000`

## Front End

[Front-End](react-frontend/FRONTEND.md)

* Node version `v19.1.0`
* Npm version `9.6.7`

#### Set-up

* cd react-frontend
* npm install
* npm start