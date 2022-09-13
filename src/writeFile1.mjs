import { writeFile } from "node:fs";

writeFile("file-1.txt", "Data1: 2564 123 4589", (error) => {
    if (error) {
        throw error;
    }
    console.log("the file-1 has been saved!");
});
