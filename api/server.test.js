const request = require("supertest");

const server = require("./server");
const database = require("../data/dbConfig");

describe("server", () => {
  it("should set the testing env", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  // GET
  describe("GET /", () => {
    it("should return 200", () => {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
    it("should return 200 with an async", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
    it("should return JSON with an async", async () => {
      const res = await request(server).get("/");
      expect(res.type).toBe("application/json");
    });
    it("should return {May: The games Begin} in body", async () => {
      const res = await request(server).get("/");
      expect(res.body.May).toEqual("The games Begin");
    });
  });

  describe("POST /", () => {
    beforeEach(async () => {
      await database("games").truncate();
    });
    afterEach(async () => {
      await database("games").truncate();
    });
    const game = {
      title: "Temple Run",
      genre: "Mobile "
    };
    it("should res with 200 showing its done", async () => {
      const res = await request(server)
        .post("/games")
        .send(game);
      expect(res.status).toBe(200);
    });

    it("should insert json object", async () => {
      const res = await request(server)
        .post("/games")
        .send(game);
      expect(res.type).toBe("application/json");
    });

    it("should  return a New game Added  msg", async () => {
      const res = await request(server)
        .post("/games")
        .send(game);
      expect(res.status).toBe(200);
    });
  });
});