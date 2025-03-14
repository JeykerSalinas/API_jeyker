import express from "express";
import cors from "cors";
import { Chance } from "chance";
const app = express();
const PORT = process.env.PORT || 3001;

const chance = new Chance();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    text:
      "<think>Bot thinking part</think>" +
      chance.paragraph({ sentences: chance.integer({ min: 1, max: 3 }) }),
    type: "chat_message",
  });
});

app.listen(PORT, () => console.log(`Working on ${PORT}`));
