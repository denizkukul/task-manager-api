import type { Handler } from "express";
import Task from "../models/Task";

export const getAllTasks: Handler = (req, res) => {
    res.status(200).send(`<h1>getAllTasks${req.body}</h1>`);
};

export const createTask: Handler = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
}

export const getTask: Handler = (req, res) => {
    res.status(200).send(`<h1>getTask${req.params.id}</h1>`);
}

export const updateTask: Handler = (req, res) => {
    res.status(200).send(`<h1>updateTask${req.params.id}</h1>`);
}

export const deleteTask: Handler = (req, res) => {
    res.status(200).send(`<h1>deleteTask${req.params.id}</h1>`);
}