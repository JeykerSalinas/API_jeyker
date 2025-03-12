import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Para manejar JSON en las peticiones

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.listen(PORT, () => console.log(`Ejecutando en el puerto ${PORT}`));
