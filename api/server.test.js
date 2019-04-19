const request = require("supertest");

const server = require("./server");

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

    // POST
    describe(" endpoint", () => {
        it("should return with 405 swhen the body dont match", () => {
            return request(server)
                .post("/games")
                .send({
                    title: "Pacman",
                    genr: "Arcade"
                })
                .expect(405);
        });

        it("Return 200 if everything matches", () => {
            return request(server)
                .post("/games")
                .send({
                    title: "Pacman",
                    genre: "Arcade"
                })
                .expect(200);
        });
    });
});
