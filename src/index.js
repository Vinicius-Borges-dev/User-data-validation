import express from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";

const app = express();

// Utilizando o cors para criar uma conexão segura entre o navegador e a API.
app.use(cors());

// Usando expresss.json para a API entender os resultados no formato JSON.
app.use(express.json());

// Usando as rotas do diretório Router.
app.use(authRouter);

// Setando uma porta como padrão caso não esteja setada no arquivo .env 
const PORT = process.env.PORT || 9090;

// Fazebdo a conexão com a porta setada
app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço: http://localhost:${PORT}`);
});
