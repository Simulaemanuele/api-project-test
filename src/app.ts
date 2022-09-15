import express from "express";
import "express-async-errors";
import prisma from './lib/prisma/client'
import { validate, planetSchema, validationErrorMiddleware, PlanetData } from "./lib/validation";

const app = express();

app.use(express.json());

app.get("/planets", async (request, response) => {
    // response.json([{ name: "Mercury" }, { name: "Venus" }]);
    const planets = await prisma.planet.findMany();

    response.json(planets)
});

app.post("/planets", validate({ body: planetSchema }), async (request, response) => {
    // response.json([{ name: "Mercury" }, { name: "Venus" }]);
    const planet: PlanetData = request.body;

    response.status(201).json(planet)
});

app.use(validationErrorMiddleware);

export default app;
