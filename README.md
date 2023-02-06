# Desafio Fullstack

This application has the purpose of creating a user, logging into your account, and allowing contacts to be created.

---

## Getting Started:

Before starting the application, install all the dependencies, type in the terminal the command:

### `yarn` or `yarn install`

<br>

Run the migrations with the command:

### `yarn typeorm migration:run -d src/data-source.ts`

<br>

Create an .env file following the env.example, and add the necessary information

---

## How to use:

- Create a user with the requested information.
- Log in with the same email and password used for registration.
- On the dashboard, enter information in the field to create a contact.
- To edit or delete a contact, click on it to access the editing modal.
- To edit or delete the user, click on the 'Edit Profile' button.
- To disconnect, click on the logout button

---

## Available Scripts

In the project directory, access the backend folder and type the command to run the server:

### `yarn dev`

<br>

In the project directory, access the frontend folder and type the command to open the application:

### `yarn run dev`

Runs the app in the development mode.\
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

<br>

### `yarn run cypress open`

Run the frontend tests automatically through cypress. <br>
For the tests to work correctly, you must have another terminal open with the application running.

On Cypress choose the E2E Testing option, then choose your browser for testing, then select Start E2E Testing. <br>
Within the browser select the spec.cy.ts file to run all tests.

<br>

### `yarn test`

Run the backend tests in your terminal.

---

## **Tests covered**

### _Frontend_

- Check if you can register an account
- Check if it is possible to log in with the account
- Check if you can create a contact
- Check if it is possible to log out of the account

### _Backend_

- Check full user CRUD
- Checks the full user CRUD on routes that require a token
- Check full contact CRUD
- Verifies full contact CRUD on routes requiring token
