const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Task = require("./models/task-model");

const app = express();
const PORT = 7700;
const dbUrl =
  "mongodb+srv://TestUser:Is9C2kj3aHJk4NOX@testdb.wlo1bk2.mongodb.net/?retryWrites=true&w=majority&appName=TestDB";

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Connected to db");
  })
  .catch((error) => {
    console.log(error);
  });

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error with connect to db");
});

db.once("open", () => {
  console.log("Connection success");
});

app.use(cors());
app.use(express.json());

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json({ message: "Task Added" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.put("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Task Updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating task", error });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    await Task.findOneAndDelete({ id: req.params.id });
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error });
  }
});

app.listen(PORT, () => {
  console.log("Server is listen now!");
});
