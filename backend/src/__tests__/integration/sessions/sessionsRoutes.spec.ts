import { AppDataSource } from "../../../data-source";
import app from "../../../app";
import request from "supertest";
import { DataSource } from "typeorm";
import { mockedUser, mockedLogin, mockedLoginError } from "../../mocks";

describe("/login", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    await request(app).post("/users").send(mockedUser);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /login - Should be able to login", async () => {
    const response = await request(app).post("/login").send(mockedLogin);

    expect(response.body).toHaveProperty("token");
    expect(response.status).toBe(200);
  });

  test("POST /login -  should not be able to login with the user with incorrect password or email", async () => {
    const response = await request(app).post("/login").send(mockedLoginError);

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });
});
