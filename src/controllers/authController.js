import { emailModel, passwordModel } from '../models/authModel.js';

class authController {

  // Recebe os dados do email e o envia para o model fazer a validação. Retorna como resultado a resposta do model no formato de um objeto json.
  verifyEmail(req, res) {
    const { email } = req.body;
    const result = new emailModel().verify(email);
    res.json({
      email: result
    });
  }

  // Recebe o valot da senha e o envia para o model fazer a verificação. Retorna como resultado a resposta do model no formato de um objeto json.
  verifyPassword(req, res) {
    const { password, confirmPassword } = req.body;
    const result = new passwordModel().verify(password, confirmPassword);
    res.json({
      password: result
    });
  }

  // Recebe os valores dos campos do email em conjunto com a senha e a confirmação de senha e os envia para o model fazer a validação e retorna como resposta um objeto json.
  completeVerification(req, res) {
    const { email, password, confirmPassword } = req.body;
    const result = [new emailModel().verify(email), new passwordModel().verify(password, confirmPassword)];
    res.json({
      Result:{
        email: result[0],
        password: result[1]  
      }
    });
  }
}

export default authController;
