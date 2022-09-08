const someTask = new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error("Something went wrong!")), 2000)
);

console.log(someTask);

someTask.then(
    (value) => {
        console.log("value: ", value);
        console.log("someTask: ", someTask);
    },

    (reason) => {
        console.log("reason: ", reason);
        console.log("someTask: ", someTask);
    }
);
