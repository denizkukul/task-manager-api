import type { Handler } from "express";
import Task from "../models/Task";

export const getAllTasks: Handler = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send({ tasks });
    }
    catch (error) {
        res.status(500).send(error)
    }
};

export const createTask: Handler = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        return res.status(201).json({ task });
    }
    catch (error) {
        res.status(500).send(error);
    }
}

export const getTask: Handler = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) return res.sendStatus(404);
        else return res.status(200).json({ task });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const updateTask: Handler = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.status(201).json({ task });
    }
    catch (error) {
        res.status(500).send(error);
    }
}

export const deleteTask: Handler = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) return res.sendStatus(404);
        res.status(200).json({ task });
    }
    catch (error) {
        res.status(500).send(error);
    };
}