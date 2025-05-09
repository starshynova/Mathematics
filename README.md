# Mathematics

You can try this app by visiting [Mathematics](https://math-app-for-children.netlify.app/)

## Overview

This isis a web application that helps children practice basic math skills through interactive exercises and two answer modes.

## Features

1. Math Operation Selection
    On the main page, the user selects a mathematical operation to begin solving examples.

2. Two Answer Modes
    The user can choose how to answer:
    - Multiple Choice: 4 options are shown — the correct answer and 3 randomly generated numbers (±20 from the result, all positive integers).
    - Free Input: The user types their own answer. The user can freely switch between these two modes at any time during the quiz.

3. Smart Example Generation
    Examples are generated randomly, ensuring that the result is always a positive integer.

4. Immediate Feedback
    After submitting an answer, the app displays whether it was correct or incorrect.

5. Result Summary
    The number of correct and incorrect answers is shown only on the result page after the user finishes the quiz.
    Returning to the main page resets the answer count and lets the user select a new operation.

## Getting the data

Data necessary for the application - the name of the math operation, the formula, the range of accepted values, the validation formula. These data are stored in the MongoDB database. React application fetches this data using fetch API, and converts strings into expression format.

## Technologies

### Client side

1. React
2. React Router
3. Fetch API
4. CSS

### Server side

1. Node.js
2. Express.js
3. MongoDB

### Deployment

1. Netlify.com - hosting for the client side
2. Render.com - hosting for the server side

### Domain

1. https://math-app-for-children.netlify.app - to run the application
2. https://react-project-t4ti.onrender.com/api/math-operation - to run the server

## Structure of the project

```
├── README.md
├── package.json
├── package-lock.json
├── node_modules/
├── client
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── dist
│   │   ├── assets
│   │   │   ├── default-DJLP6i-q.png
│   │   │   ├── happy-lMPrIiSO.png
│   │   │   ├── index-Bw-okdC8.js
│   │   │   ├── index-CRMeaEYv.css
│   │   │   └── sad-whhlb0Fk.png
│   │   ├── index.html
│   │   └── vite.svg
│   ├── node_modules
│   ├── public
│   │   └── math-icon.svg
│   ├── src
│   │   ├── assets
│   │   │   ├── default.png
│   │   │   ├── happy.png
│   │   │   └── sad.png
│   │   ├── components
│   │   │   ├── Button.jsx
│   │   │   ├── GoBackButton.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── InputField.jsx
│   │   │   ├── OperationList.jsx
│   │   │   └── component.css
│   │   ├── context
│   │   │   └── CountContext.jsx
│   │   ├── hooks
│   │   │   ├── useCount.jsx
│   │   │   └── useGenerateExample.jsx
│   │   ├── pages
│   │   │   ├── MainPage.jsx
│   │   │   ├── QuestionPage.jsx
│   │   │   └── ResultPage.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
└── server
    ├── .env
    ├── generateExample.js
    ├── getData.js
    ├── package.json
    ├── randomNumbers.js
    └── server.js
```
