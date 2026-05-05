const Task = require('../models/taskModel');

const getAllTasks = (req, res) => {
  res.json(Task.getAllTasks());
};

const getTaskById = (req, res) => {
  const task = Task.getTaskById(parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
};

const createTask = (req, res) => {
  const { title, completed } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });
  const newTask = Task.createTask(title, completed);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const { title, completed } = req.body;
  const task = Task.updateTask(parseInt(req.params.id), title, completed);
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
};

const deleteTask = (req, res) => {
  const deleted = Task.deleteTask(parseInt(req.params.id));
  if (!deleted) return res.status(404).json({ message: 'Task not found' });
  res.json({ message: 'Task deleted' });
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };