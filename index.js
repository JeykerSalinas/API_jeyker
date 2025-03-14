import express from "express";
import cors from "cors";
import { Chance } from "chance";
const app = express();
const PORT = process.env.PORT || 3001;

const chance = new Chance();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Para manejar JSON en las peticiones

app.get("/", (req, res) => {
  res.send("<think>Bot thinking part</think>" + chance.paragraph({ sentences: 2 }));
});

app.listen(PORT, () => console.log(`Ejecutando en el puerto ${PORT}`));
