const express = require("express");
const { BoardModal, TaskModal } = require("../Models/Board.Models");

const BoardRouter = express.Router();

BoardRouter.get("/", async (req, res) => {
  try {
    const boards = await BoardModal.find();

    res.json({ msg: "yes", boards });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

BoardRouter.post("/", async (req, res) => {
  const { name, tasks } = req.body;

  try {
    const board = new BoardModal({ name, tasks });
    await board.save();

    res.json({ msg: "Board Created", board });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

BoardRouter.post("/task", async (req, res) => {
  const { title, description, status, subtask, boardID } = req.body;

  try {
    const task = new TaskModal({
      title,
      description,
      status,
      subtask,
      boardID,
    });
    await task.save();

    const findBoard = await BoardModal.findOne({ _id: boardID });

    const board = await BoardModal.findOneAndUpdate(
      { _id: boardID },
      { tasks: [...findBoard.tasks, task] },
      { new: true }
    );

    res.json({ msg: "Board Created", board });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

module.exports = { BoardRouter };
