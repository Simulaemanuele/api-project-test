// setTimeout(() => {
//     console.log("1. Hello!");
// }, 1500);

// setTimeout(() => {
//     console.log("2. How are you?");
// }, 3000);

// setTimeout(() => {
//     console.log("3. Goodbye!");
// }, 3700);

import * as fs from "node:fs";

fs.readFile("file-1.txt", { encoding: "utf-8" }, (error, data1) => {
    if (error) {
        console.error(error.message);
        return;
    }
    console.log(data1);

    fs.readFile("file-2.txt", { encoding: "utf-8" }, (error, data2) => {
        if (error) {
            console.error(error.message);
            return;
        }
        console.log(data2);
    });

    fs.readFile("file-3.txt", { encoding: "utf-8" }, (error, data3) => {
        if (error) {
            console.error(error.message);
            return;
        }
        console.log(data3);
    });
});
