import type { Handler } from "express";
import Task from "../models/Task";

export const getAllTasks: Handler = async (req, res) => {
    const taskList = await Task.find();
    res.status(201).send({ taskList });
};

export const createTask: Handler = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
}

export const getTask: Handler = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.status(201).json({ task });
    }
    catch (error) {
        res.status(500).send("task not found");
    }
}

export const updateTask: Handler = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({ task });
    }
    catch (error) {
        res.status(500).send("task not found");
    }
}

export const deleteTask: Handler = async (req, res) => {
    try {
        const task = await Task.findByIdAndRemove(req.params.id);
        res.status(201).json({ task });
    }
    catch (error) {
        res.status(500).send("task not found");
    };
}