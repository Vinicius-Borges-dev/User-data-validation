import express from "express"
import authController from "../controllers/authController.js";

const authRouter = express.Router();

// Rota padrão
authRouter.get('/', (req, res) => {
    res.status(200).json({
        message: "Tudo ok com a rota padrão!"
    })
})

// Instânciando uma nova classe
const auth = new authController();

// Rota para fazer a verificação apenas do e-mail
authRouter.post('/auth/verifyEmail', auth.verifyEmail)

// Rota para fazer a verificação da senha
authRouter.post('/auth/verifyPassword', auth.verifyPassword);

// Faz a verificação completa de todos os campos(email, senha e confimação de senha)
authRouter.post('/auth/verifyAll', auth.completeVerification);


export default authRouter;
