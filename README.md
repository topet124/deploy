# Jobimy

This project is a full-stack web application built using React for the front-end and MongoDB for the back-end. It includes dynamic routing, dashboard functionality, user authentication, and data management.

## Table of Contents

•⁠  ⁠[Features](#features)
•⁠  ⁠[Tech Stack](#tech-stack)
•⁠  ⁠[Prerequisites](#prerequisites)
•⁠  ⁠[Installation](#installation)
•⁠  ⁠[Environment Variables Setup](#environment-variables-setup)
•⁠  ⁠[Starting the Application](#starting-the-application)
•⁠  ⁠[Front-end Overview](#front-end-overview)
•⁠  ⁠[Back-end Overview](#back-end-overview)
•⁠  ⁠[Contributing](#contributing)
•⁠  ⁠[License](#license)

## Features

•⁠  ⁠React Router: Used for route navigation and passing information between components.
•⁠  ⁠Dynamic Table.js: Powers the dashboard, allowing for dynamic data display and manipulation.
•⁠  ⁠Express Validator: Handles authentication and validation in the back-end.
•⁠  ⁠MongoDB & Mongoose: Provides data persistence and schema-based data modeling.
•⁠  ⁠Full-stack implementation for a seamless user experience.

## Tech Stack

### Front-end:
•⁠  ⁠React
•⁠  ⁠React Router
•⁠  ⁠react Dynamic Table package(for the dashboard table)

### Back-end:
•⁠  ⁠Node.js
•⁠  ⁠Express.js
•⁠  ⁠MongoDB
•⁠  ⁠Mongoose
•⁠  ⁠Express Validator

## Prerequisites

Ensure you have the following installed:

•⁠  ⁠Node.js (v14 or above)
•⁠  ⁠MongoDB
•⁠  ⁠npm (comes with Node.js)
•⁠  ⁠A running instance of MongoDB (locally or via a cloud service like MongoDB Atlas)

## Installation

1.⁠ ⁠Clone the repository:
   git clone https://github.com/your-repo-url.git
   cd your-project-directory
   npm install

## Environment Variables Setup

PORT=5106

NODE_ENV=development

MONGO_URL=mongodb+srv://topet124:london123,@jobimy.sr4i5.mongodb.net/?retryWrites=true&w=majority&appName=Jobimy
JWT_KEY=secret

## Starting the Application

npm run dev

## Front-end Overview
React Router is used to handle navigation and passing data between components dynamically.
Components can use the React Router useNavigate and useParams hooks to navigate between routes and pass necessary data.

Example routes:
/dashboard: Displays the main dashboard page.
/profile/:id: Displays a specific user's profile.
Dynamic Table library is utilized to create a responsive and functional dashboard.

The dashboard allows users to sort, filter, and paginate data.
The data in the table is fetched from the back-end using RESTful API endpoints.


##  Back-end Overview
Express Validator is used to validate user input during authentication and other forms.

Example validations include checking for required fields, validating email formats, and ensuring password complexity.
MongoDB & Mongoose: MongoDB is used for the database, while Mongoose provides an easy way to model the data.
Mongoose schemas define the structure of data stored in MongoDB.
Example:
User Schema: Defines the structure for storing user information such as name, email, and password.

## Contributing

If you would like to contribute to this project, please follow these steps:
Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
