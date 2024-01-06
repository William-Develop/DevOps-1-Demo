const request = require ("supertest");
const app = require ("../index.js");
const http = require ("http");

let server;

beforeAll(() => {
    server = http.createServer(app);
    server.listen();
});

afterAll((done) => {
    server.close(done);
});

test("GET /", async () => {
    const response = await request(server).get("/");
    expect(response.text).toBe("✨ Hello DevOps Demo! CI Completed ✨");
    expect(response.status).toBe(200);
}); 