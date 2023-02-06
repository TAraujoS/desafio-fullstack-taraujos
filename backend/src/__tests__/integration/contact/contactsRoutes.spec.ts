import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import { mockedUser, mockedLogin, mockedContact } from "../../mocks";
import app from "../../../app";

describe("/contacts", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((error) => {
        console.error("Error during Data Source initialization", error);
      });
  });
  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /contacts -> Must be able to create a contact", async () => {
    await request(app).post("/users").send(mockedUser);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedLogin);

    const response = await request(app)
      .post("/contacts")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(mockedContact);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("phone");
    expect(response.body).toHaveProperty("createdAt");

    expect(response.body.name).toEqual("Contato");
    expect(response.body.email).toEqual("contato@mail.com");
    expect(response.body.phone).toEqual("2840028922");

    expect(response.status).toBe(201);
  });

  test("POST /contacts ->  should not be able to list contacts without authentication", async () => {
    const response = await request(app).get("/contacts");

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("GET /contacts ->  Must be able to list contacts", async () => {
    await request(app).post("/users").send(mockedUser);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedLogin);
    const response = await request(app)
      .get("/contacts")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(response.body).toHaveLength(1);

    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("email");
    expect(response.body[0]).toHaveProperty("phone");
    expect(response.body[0]).toHaveProperty("createdAt");

    expect(response.status).toBe(200);
  });

  test("GET /contacts ->  should not be able to list contacts without authentication", async () => {
    const response = await request(app).get("/contacts");

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("DELETE /contacts/:contactId ->  should not be able to delete user without authentication", async () => {
    const response = await request(app).delete(`/contacts/123343`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("DELETE /contacts/:contactId ->  should  be able to delete user", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedLogin);

    const contactTobeDeletedRequest = await request(app)
      .get("/contacts")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);
    const contactTobeDeletedId = contactTobeDeletedRequest.body[0].id;

    const response = await request(app)
      .delete(`/contacts/${contactTobeDeletedId}`)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(response.status).toBe(204);
  });
});
