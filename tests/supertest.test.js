// import { expect, test } from "vitest";
// import request from "supertest";
// import app from "../index";

// const { expect, test } = require("vitest");
// const request = require("supertest");
// const app = require("../index"); 

// let server //store an instance of your server

// test("GET /", async () => {
//     server = app.listen()
//     await request(server)
//         .get("/")
//         .expect("✨ Hello DevOps Demo! ✨")
//     server.close()    
// })

// -----------------------

// const request = require('supertest');
import request from 'supertest';
import app from '../index.js';
// const app = require('../index.js');

let server; //store an instance of your server

// Use dynamic import() syntax to import the vitest module
const { expect, test } = await import('vitest');

test('GET /', async () => {
server = app.listen();
await request(server)
    .get('/')
    .expect('✨ Hello DevOps Demo! ✨');
server.close();
});

