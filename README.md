# [Math App for children](https://math-app-for-children.netlify.app/)

## Overview

This is a training application for children. It helps the user to practice simple maths calculations.

## Usage

1. On the main page of the application, the user can select a mathematical expression to solve the examples
2. On the example page the user sees examples for the selected formula. The numbers in the examples are generated randomly according to the check (the answer must be a positive integer). When the user has written an answer in the input field, he/she can check it. If the answer is correct or incorrect, the user sees the relevant message.
If the user wants, he/she can go to the previous page to select another mathematical expression.
3. On the result page, the user can see the number of correct and incorrect answers. The user can also go back to the main page.The user can also go back to the main page.
This action resets the correct/incorrect answer count to zero.

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

### Deploy

1. Netlify.com - hosting for the client side
2. Render.com - hosting for the server side

## Getting started

1. https://react-project-t4ti.onrender.com/api/math-operation - to run the server
2. https://math-app-for-children.netlify.app/ - to run the application

## Structure of the project

```
├── README.md
├── package.json
├── package-lock.json
├── .gitignore
├── node_modules/
├── client
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── dist/
│   │   ├── assets/
│   │   │   ├── default-DJLP6i-q.png
│   │   │   ├── happy-lMPrIiSO.png
│   │   │   ├── index-Bw-okdC8.js
│   │   │   ├── index-CRMeaEYv.css
│   │   │   ├── sad-whhlb0Fk.png
│   │   ├── index.html
│   │   ├── vite.svg
│   ├── node_modules/
│   ├── public/
│   │   ├── math-icon.svg
│   ├── src/
│   │   ├── assets/
│   │   │   ├── default.png
│   │   │   ├── happy.png
│   │   │   ├── sad.png
│   │   ├── components/
│   │   │   ├── Button.jsx
│   │   │   ├── GoBackButton.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── InputField.jsx
│   │   │   ├── OperationList.jsx
│   │   │   ├── component.css
│   │   ├── context/
│   │   │   ├── CountContext.jsx
│   │   ├── hooks/
│   │   │   ├── useCount.jsx
│   │   │   ├── useGenerateExample.jsx
│   │   ├── pages/
│   │   │   ├── MainPage.jsx
│   │   │   ├── QuestionPage.jsx
│   │   │   ├── ResultPage.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── getData.js
│   │   ├── main.jsx
│   │   ├── randomNumbers.js
└── server
    ├── .env
    ├── .gitignore
    ├── package.json
    ├── server.js
```