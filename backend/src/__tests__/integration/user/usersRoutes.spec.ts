import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import request from "supertest";
import { mockedUser, mockedLogin } from "../../mocks";
import app from "../../../app";

describe("/users", () => {
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

  test("POST /users -> Must be able to create a user", async () => {
    const response = await request(app).post("/users").send(mockedUser);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("phone");
    expect(response.body).toHaveProperty("createdAt");

    expect(response.body.name).toEqual("Kenzinho");
    expect(response.body.email).toEqual("kenzinho@mail.com");
    expect(response.body.phone).toEqual("2740028922");

    expect(response.status).toBe(201);
  });

  test("POST /users -> should not be able to create a user that already exists", async () => {
    const response = await request(app).post("/users").send(mockedUser);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(409);
  });

  test("GET /users/account ->  Must be able to list user", async () => {
    await request(app).post("/users").send(mockedUser);
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedLogin);
    const response = await request(app)
      .get("/users/account")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("phone");
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("contacts");
    expect(response.body).not.toHaveProperty("password");

    expect(response.status).toBe(200);
  });

  test("GET /users/account ->  should not be able to list users without authentication", async () => {
    const response = await request(app).get("/users/account");

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("PATCH /users/account ->  should not be able to update user without authentication", async () => {
    const response = await request(app).patch(`/users/account`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("PATCH /users/account ->  should be able to update user", async () => {
    const newValues = { name: "KenzieDev", phone: "28999999999" };

    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedLogin);

    const response = await request(app)
      .patch(`/users/account`)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`)
      .send(newValues);

    const userUpdated = await request(app)
      .get("/users/account")
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(response.status).toBe(200);
    expect(userUpdated.body.name).toEqual("KenzieDev");
    expect(userUpdated.body).not.toHaveProperty("password");
  });

  test("DELETE /users/account ->  should not be able to delete user without authentication", async () => {
    const response = await request(app).delete(`/users/account`);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(401);
  });

  test("DELETE /users/account ->  should  be able to delete user", async () => {
    const userLoginResponse = await request(app)
      .post("/login")
      .send(mockedLogin);

    const response = await request(app)
      .delete(`/users/account`)
      .set("Authorization", `Bearer ${userLoginResponse.body.token}`);

    expect(response.status).toBe(204);
  });
});
