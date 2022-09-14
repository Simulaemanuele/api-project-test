import express from "express";
import "express-async-errors";
import prisma from './lib/prisma/client'

const app = express();

app.use(express.json());

app.get("/planets", async (request, response) => {
    // response.json([{ name: "Mercury" }, { name: "Venus" }]);
    const planets = await prisma.planet.findMany();

    response.json(planets)
});

app.post("/planets", async (request, response) => {
    // response.json([{ name: "Mercury" }, { name: "Venus" }]);
    const planet = request.body;

    response.status(201).json(planet)
});

export default app;
