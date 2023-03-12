import { connectDB } from "./db/connect";
import express = require("express");
import taskHandler from "./routes/tasks";
import ENV from "./env";
import path = require("path");

const start = async () => {
    try {
        await connectDB(ENV.MONGO_URI);
        console.log("Connected to Database");
        app.listen(ENV.PORT, () => {
            console.log("Server running on port 5000...");
        });
    } catch (error) {
        console.log(error);
    }
}

const app = express();


app.use(express.json());

app.use("/api/v1/task", taskHandler);

app.all("*", (req, res) => {
    res.status(404).send("Not Found");
});

start();