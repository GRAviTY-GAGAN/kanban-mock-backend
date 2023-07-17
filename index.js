const express = require("express");
const { connection } = require("./db");
const { BoardRouter } = require("./Routes/Board.Routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/boards", BoardRouter);

app.get("/", (req, res) => {
  try {
    res.send("Hello");
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log(`DB connected`);
    console.log(`Server running at port 8080`);
  } catch (error) {
    console.log(error.message);
  }
});
