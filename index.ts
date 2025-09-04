import { Elysia } from "elysia";

const app = new Elysia().post("/interactions", async ({ body }) => {
    console.log("Received interaction:", body);

    return {
        type: 4,
        data: {
            content: "Hello from Elysia on Workers!",
        },
    };
});

export default {
    fetch: app.handle,
};
