import { writeFile } from "node:fs";

writeFile("file-2.txt", "Data2: 4569 221 3456", (error) => {
    if (error) {
        throw error;
    }
    console.log("the file-2 has been saved!");
});
