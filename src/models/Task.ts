import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        requires: [true, "name is required"],
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model("Task", taskSchema);

export default Task;