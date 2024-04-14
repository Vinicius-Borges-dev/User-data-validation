import { emailModel, passwordModel } from '../models/authModel.js';

class authController {
  verifyEmail(req, res) {
    const { email } = req.body;
    const result = new emailModel().verify(email);
    res.json({
      email: result
    });
  }

  verifyPassword(req, res) {
    const { password, confirmPassword } = req.body;
    const result = new passwordModel().verify(password, confirmPassword);
    res.json({
      password: result
    });
  }

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
