const request = require ("supertest"); // allows test HTTP requests
const app = require ("../index.js");
const http = require ("http"); // module allow to create server

let server;

// create server, start listening
beforeAll(() => {
    server = http.createServer(app);
    server.listen();
});

afterAll((done) => {
    server.close(done);
});

// Define test for GET / route
test("GET /", async () => {
    const response = await request(server).get("/");
    expect(response.text).toBe("✨ Hello DevOps Demo! CI Completed ✨");
    expect(response.status).toBe(200);
}); 