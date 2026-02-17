**-- This is a Full Stack mini project which I built as part of a coding challenge for a Junior Full Stack Engineer position. --**

The goal of this project was to implement a simple user registration "flow" using a NestJS backend and a React frontend. Users can register by providing their full-name, email and password. They receive feedback indicating whether the registration was successful or not.

The project focuses on clean structure, basic validation, event-driven concepts and clear separation between frontend and backend.


*--Technologies I used in this project--*
**--BACKEND--**
 1. NestJS => which is a progressive Node.js framework used to build scalable and maintainable a REST API. It also provides a modular architecture, built in dependency injection, and strong TypeScript support.
 2. Node.js => which is a JavaScript runtime environment used for executing server side logic and handling asynchronous operations.
 3. Kafka (Mock Producer Only) => which is used to simulate event driven communication by emitting user registration events.

**--FRONTEND--**
 1. React => which is a JavaScript library for building user interfaces, used here to implement a user registration form with controlled components and state-driven rendering.
 2. TypeScript (React) => which provides type safety and improved maintainability for frontend components and API interactions.
 3. Fetch API => which was used for making HTTP requests from the React application to the NestJS REST API.

 **--DEVELOPMENT AND OPTIONAL BONUS TECHNOLOGIES USED IN THIS PROJECT--**
  1. Npm => a package manager used for dependency management and project scripts.
  2. Bull Queue => a Redis (backed) job queue used to handle background tasks such as sending a welcome email after user registration.
  3. Node.js EventEmitter => which is used to emit and listen for internal application events, enabling loose coupling between different parts of the system.
  4. MongoDB => which is a database (NoSQL) used to persist user data.
  5. TypeORM => which is a object-relational mapper used to manage database entities, repositories and migrations in a structured and maintainable way.

*--How to run a backend--*
### Prerequisites 
1. Node.js (v18 or later recommended)
2. Npm
3. Kafka running locally(optional, mock producer is used)

### Backend how to Steps:
1. bash (terminal)
2. cd backend
3. npm install => install npm packages
4. npm run start:dev
### The backend will be running on => http://localhost:3000

### Frontend how to Steps:
1. bash (terminal)
2. cd frontend
3. npm install => install npm packages
4. npm start 
### The Frontend will be running on => http://localhost:3001

### API Endpoint
=> POST /register  
Registers a new user using full name, email, and password!

### Testing
*--Backend unit tests are implemented using Jest!--*
To run tests:
1. terminal (bash)
2. cd backend  
3. npm run test

*--Assumptions and Future Improvements (Discussion)--*

During the development of this project, the main focus was on understanding the core full-stack flow and NestJS architecture. There are several improvements that I was aware of but did not fully implement due to time limit and my current experience level, and technical level.

Considering the current NestJS backend and React frontend, my main goal would be to keep the project simple, clear, and easy to improve over time.

On the backend side, I would continue using a clean NestJS structure with modules, controllers, services, and DTOs, so the code stays organized and readable as the system grows. I would focus on basic but important things like input validation, clear error handling, and consistent API responses, so the frontend always knows what to expect. As more users use the system, I would be careful to return only the data that is really needed and add simple algorithm where necessary.

Passwords would always be hashed before being stored in the database and never returned in plain text. In a real-world application, features like password hashing and email confirmation would be handled properly using a real email service instead of a mock solution.

When it comes to the API, it is documented using Swagger, which helps keep the contract clear and makes it easier to extend the backend without breaking the frontend.

On the frontend side, the registration component works correctly, but it could be simplified and refactored further. With more experience, I would split it into smaller components or simple custom hooks to make the code easier to read and maintain. I would also make sure to handle loading and error states properly and avoid unnecessary API calls.

The UI was intentionally kept simple and functional, but it could be improved in the future by adding features like Login, Forgot Password, and Remember Me, as the application continues to grow.

From a performance and maintenance point of view, I would focus on small, practical improvements such as reducing extra network requests, avoiding unnecessary re-renders, and keeping state management simple. I would also rely on code reviews and feedback from more experienced developers and improve the system step by step as I learn more.

Overall, this project represents a solid starting point, with clear opportunities for future improvements as the system and user base grow.

Thank you,
Ervin Colo