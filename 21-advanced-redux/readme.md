# Advanced Redux

# Getting Started

To get started with this project, follow these steps:

1. **Install dependencies**: Run the `npm install` command in your terminal to install the required dependencies for this project.

    ```bash
    npm install
    ```

2. **Install Redux Toolkit**: This project uses Redux Toolkit for state management. Install it with the following command:

    ```bash
    npm install @reduxjs/toolkit
    ```

3. **Start the project**: Once all dependencies are installed, you can start the project by running the `npm start` command. This will start the development server and open the website in your default web browser.

    ```bash
    npm start
    ```

# Project Overview

In this project, we interact with Firebase's real-time database to manage user data. We perform the following operations:

1. **Send HTTP requests**: We use HTTP requests to communicate with the Firebase database. This allows us to perform CRUD (Create, Read, Update, Delete) operations on our data.

2. **Store user cart data**: When a user adds items to their cart, we store this data in Firebase. This allows us to persist the user's cart data across sessions, providing a better user experience.

3. **Fetch data from Firebase**: We retrieve data from the Firebase database to display to the user. This includes the user's cart data and any other data we're storing in Firebase.

By leveraging Firebase's real-time database, we're able to provide a robust and responsive user experience.