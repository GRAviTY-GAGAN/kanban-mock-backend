const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tasks: { type: Array, required: true },
  },
  { versionKey: false }
);

const BoardModal = new mongoose.model("board", boardSchema);

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: "Todo" },
    subtask: { type: Array },
    boardID: { type: String, required: true },
  },
  { versionKey: false }
);

const TaskModal = new mongoose.model("task", taskSchema);

module.exports = { BoardModal, TaskModal };
