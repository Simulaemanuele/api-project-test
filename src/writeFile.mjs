import { writeFile } from "node:fs";

writeFile("file-0.txt", (error) => {
    if (error) {
        throw error;
    }
    console.log("the file-0 has been saved!");
});
