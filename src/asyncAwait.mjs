import * as fs from "node:fs/promises";

// const outputFile = async () => {
//     try {
//         const file1data = await fs.readFile("file-1.txt", {
//             encoding: "utf-8",
//         });
//         console.log("data: ", file1data);

//         const file2data = await fs.readFile("file-2.txt", {
//             encoding: "utf-8",
//         });
//         console.log("data: ", file2data);

//         const file3data = await fs.readFile("file-3.txt", {
//             encoding: "utf-8",
//         });
//         console.log("data: ", file3data);
//     } catch {
//         console.error(error);
//     }
// };

// outputFile();

// const outputFilesTogether = async () => {
//     try {
//         const data = await Promise.all([
//             await fs.readFile("file-1.txt", { encoding: "utf-8" }),
//             await fs.readFile("file-2.txt", { encoding: "utf-8" }),
//             await fs.readFile("file-3.txt", { encoding: "utf-8" }),
//         ]);

//         console.log("data: ", data);
//     } catch {
//         console.error(error);
//     }
// };

// outputFilesTogether();

try {
    const data = await Promise.all([
        await fs.readFile("file-1.txt", { encoding: "utf-8" }),
        await fs.readFile("file-2.txt", { encoding: "utf-8" }),
        await fs.readFile("file-3.txt", { encoding: "utf-8" }),
    ]);

    console.log("data: ", data);
} catch {
    console.error(error);
}
