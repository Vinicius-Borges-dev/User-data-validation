import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRouter);

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço: http://localhost:${PORT}`);
});
