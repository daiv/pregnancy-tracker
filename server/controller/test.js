import supertest from "supertest";
import router from "../router.js";

import express, { json } from "express";
import mongoose from "../model/index.js";

describe("tests", () => {

  const app = express();
  app.use(json());
  app.use("/", router);
  const request = supertest(app);

  beforeAll(async () => {
    await mongoose.startConnection();
    console.log(`connected to test database ${mongoose.connection.name}`);

  });

  afterAll(async () => {

    if (mongoose.connection.name.includes('test')) {
      await mongoose.connection.db.dropDatabase();
      console.log(`test database ${mongoose.connection.name} dropped`);
    }

    await mongoose.connection.close();
    console.log(`connection to test database ${mongoose.connection.name} closed`);
  });
  describe("LPDS", () => {


    describe("GET /lpd", () => {

      it("should return 200 for GET /lpd", async () => {
        const response = await request.get("/lpd");
        expect(response.status).toBe(200);
      });

      it("should return empty body when no lpd", async () => {
        const response = await request.get("/lpd");
        expect(response.body).toEqual([]);
      });

    });

    describe("POST /lpd", () => {

      it("should return 400 for POST /lpd with missing lpd", async () => {
        const response = await request.post("/lpd").send({});
        expect(response.status).toBe(400);
      });

      it("should return 400 for POST /lpd with invalid lpd", async () => {
        const response = await request.post("/lpd").send({ lpd: "invalid-date" });
        expect(response.status).toBe(400);
      });

      it("should return 201 for POST /lpd", async () => {
        const response = await request.post("/lpd").send({ lpd: "2023-10-01" });
        expect(response.status).toBe(201);
      });
      it("should return a valid lpd for  /lpd", async () => {
        const response = await request.post("/lpd").send({ lpd: "2023-10-01" });
        expect(response.status).toBe(201);
      });
    });

    describe("GET /lpd", () => {
      it("should return a valid lpd", async () => {
        const response = await request.get("/lpd");
        expect(response.status).toBe(200);
        expect(response.body[0].lpd).toEqual("2023-10-01T00:00:00.000Z");

      })
    });
  });


  describe("EVENTS", () => {

    describe("GET /event", () => {

      it("should return 200 for GET /events", async () => {
        const response = await request.get("/event");
        expect(response.status).toBe(200);
      });

      it("should return empty body when no events", async () => {
        const response = await request.get("/event");
        expect(response.body).toEqual([]);
      });

    });

    describe("POST /event", () => {

      it("should return 400 for POST /events with missing event", async () => {
        const response = await request.post("/event").send({});
        expect(response.status).toBe(400);
      });

      it("should return 400 for POST /events with invalid event", async () => {
        const response = await request.post("/event").send({ event: "invalid-date" });
        expect(response.status).toBe(400);
      });

      it("should return 201 for POST /events", async () => {
        const response = await request.post("/event").send({ title: "test", date: "2023-10-01", description: "test", place: "testArea" });
        expect(response.status).toBe(201);
      });
    });
    let eventId;
    describe("GET /event", () => {
      it("should return a valid event", async () => {
        const response = await request.get("/event");
        expect(response.status).toBe(200);
        expect(response.body[0].title).toEqual("test");
        expect(response.body[0].date).toEqual("2023-10-01T00:00:00.000Z");
        expect(response.body[0].description).toEqual("test");
        expect(response.body[0].place).toEqual("testArea");
        eventId = response.body[0]._id;
        expect(eventId).toBeDefined();
      })
    });

    describe("DELETE /event", () => {
      it("should return 200 for DELETE /events", async () => {
        const response = await request.delete("/event/" + eventId);
        expect(response.status).toBe(200);
      });

      it("should return empty body after deleting", async () => {
        const response = await request.get("/event");
        expect(response.body).toEqual([]);
      });


      it("should return 400 for DELETE /events with invalid id", async () => {
        const response = await request.delete("/event/invalid-id");
        expect(response.status).toBe(400);
      });

      it("should return 404 for DELETE /events with non-existing id", async () => {
        const response = await request.delete("/event/123456789012345678901234");
        expect(response.status).toBe(404);
      });
    });
  });
});