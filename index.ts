import { Elysia } from "elysia";

new Elysia()
    .post("/interactions", async ({ body }) => {
        console.log("Received interaction:", body);
    })
    .listen(6767);
