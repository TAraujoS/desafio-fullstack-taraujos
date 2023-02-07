# Desafio Fullstack

This application has the purpose of creating a user, logging into your account, and allowing contacts to be created.

---

## Getting Started:

Before starting the application, install all the dependencies, type in the terminal the command:

### `yarn` or `yarn install`

<br>

Create an .env file following the env.example, and add the necessary information

<br>

Run the migrations with the command:

### `yarn typeorm migration:run -d src/data-source.ts`

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

<br>

# **API ROUTES**

## **User Route /user**

---

## 1. Login User

- POST /login
- Authorization: None
- Content-type: application/json

Request:

```json
{
  "name": "Kenzie",
  "password": "1234"
}
```

---

## 2. Create User

- POST /users
- Authorization: None
- Content-type: application/json

Request:

```json
{
  "name": "Kenzie",
  "email": "kenzie@gmail.com",
  "password": "1234",
  "phone": "2740028922"
}
```

Response:

```json
{
  "id": "13d7ef1d-614f-42d1-a9a3-4bc0e8f8cae5",
  "name": "Kenzie",
  "email": "kenzie@gmail.com",
  "phone": "2740028922",
  "createdAt": "2023-01-31T15:44:28.679Z"
}
```

---

## 2.1 List User

- GET /users/account
- Authorization: Bearer Token
- Content-type: application/json
- Empty body

Response:

```json
{
  "id": "13d7ef1d-614f-42d1-a9a3-4bc0e8f8cae5",
  "name": "Kenzinho",
  "email": "kenzinho@gmail.com",
  "phone": "2740028922",
  "createdAt": "2023-01-31T15:44:28.679Z",
  "contacts": []
}
```

---

## 2.2 Update User

- PATCH /users/account
- Authorization: Bearer Token
- Content-type: application/json

Request:

```json
{
  "name": "newKenzie",
  "email": "newEmail@mail.com",
  "phone": "99000000"
}
```

---

## 2.3 Delete User

- DELETE /users/account
- Authorization: Bearer Token
- Content-type: application/json
- Empty body

---

<br>

## **Contact Route /contacts**

---

## 3. Create Contact

- POST /contacts/
- Authorization: Bearer Token
- Content-type: application/json

Request:

```json
{
  "name": "Contact",
  "email": "contact@mail.com",
  "phone": "2899999999"
}
```

Response

```json
{
  "name": "Contact",
  "email": "contact@mail.com",
  "phone": "2899999999",
  "users": {
    "id": "13d7ef1d-614f-42d1-a9a3-4bc0e8f8cae5",
    "name": "Kenzinho",
    "email": "kenzienho@mail.com",
    "phone": "2740028922",
    "createdAt": "2023-01-31T15:44:28.679Z",
    "contacts": []
  },
  "id": "f6bb914c-f642-4401-9f36-4598d261dd09",
  "createdAt": "2023-02-06T21:22:33.206Z"
}
```

---

## 3.1 List Contact

- GET /contacts/
- Authorization: Bearer Token
- Content-type: application/json
- Empty body

Response:

```json
[
  {
    "id": "f6bb914c-f642-4401-9f36-4598d261dd09",
    "name": "Contact",
    "email": "contact@mail.com",
    "phone": "2899999999",
    "createdAt": "2023-02-06T21:22:33.206Z"
  }
]
```

---

## 3.2 Update Contact

- PATCH /contacts/:contactId
- Authorization: Bearer Token
- Content-type: application/json

Request:

```json
{
  "name": "newContact"
}
```

---

## 3.3 Delete Contact

- DELETE /contacts/:contactId
- Authorization: Bearer Token
- Content-type: application/json
- Empty body

---

<br>

# **Possible Errors**

- If you do not pass the token in the "Authorization" field

#### Status `401 - UNAUTHORIZED` - "Missing authorization token"

```json
{
  "message": "Missing authorization token"
}
```

- Create a user with existing email

#### Status `409 - CONFLICT` - Email already exists

```json
{
  "message": "This email already exists"
}
```

- Login with incorrect email or password

#### Status `403 - FORBIDDEN` - "Invalid user or password"

```json
{
  "message": "Invalid user or password"
}
```

<br>

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
