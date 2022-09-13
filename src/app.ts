import express from "express";
import "express-async-errors";
import prisma from './lib/prisma/client'

const app = express();

app.get("/planets", async (request, response) => {
    // response.json([{ name: "Mercury" }, { name: "Venus" }]);
    const planets = await prisma.planet.findMany();

    response.json(planets)
});

export default app;
