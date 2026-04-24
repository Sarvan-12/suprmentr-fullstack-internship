let tasks = [];
let nextId = 1;

const getAllTasks = () => tasks;

const getTaskById = (id) => tasks.find(t => t.id === id);

const createTask = (title, completed = false) => {
  const newTask = { id: nextId++, title, completed };
  tasks.push(newTask);
  return newTask;
};

const updateTask = (id, title, completed) => {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  return task;
};

const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };