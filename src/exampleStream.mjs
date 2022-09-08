import { createReadStream } from "fs";

const file = createReadStream("file-3.txt", { encoding: "utf-8" });

file.on("data", (chunk) => {
    console.log("chunk: ", chunk.toString("utf-8"));
});

file.on("end", () => console.error("End of the file stream"));

file.on("error", () => console.error(`Error reading file: ${error}`));
