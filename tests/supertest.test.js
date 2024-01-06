import { expect, test } from "vitest";
import request from "supertest";
import app from "../index";

let server //store an instance of your server

test("GET /", async () => {
    server = app.listen()
    await request(server)
        .get("/")
        .expect("✨ Hello DevOps Demo! ✨")
    server.close()    
})