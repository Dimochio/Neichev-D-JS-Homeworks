const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  id: { type: String, required: true },
  text: String,
  isDone: { type: Boolean, default: false },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
