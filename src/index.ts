import { connectDB } from "./db/connect";
import bodyParser = require("body-parser");
import express = require("express");
import taskHandler from "./routes/tasks";
import ENV from "./env";

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

app.use(bodyParser.json());

app.use("/api/v1/task", taskHandler);

app.all("*", (req, res) => {
    res.status(200).send("<h1>Not Found</h1>");
});

start();