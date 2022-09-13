import { writeFile } from "node:fs";

writeFile("file-3.txt", "Data3: 8688 565 9997", (error) => {
    if (error) {
        throw error;
    }
    console.log("the file-3 has been saved!");
});
