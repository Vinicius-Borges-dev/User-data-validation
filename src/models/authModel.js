export class emailModel {

    constructor() {
        this.emailModel = emailModel;
    }

    // Verifica se o e-mail foi preenchido
    static checkFilling(data) {
        return ({ itWasFilled: data.length > 0 })
    }

    // Verifica se o e-mail está no formato correto(se possue o 2 e não deve conter espaços)
    static emailFormat(data) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return { hadFormatValidation: regex.test(data) };
    }

    // Verifica se o e-mail está na blacklist (se segue um padrão genérico duvidoso)
    static emailBlacklist(data) {
        const blackList = ['admin@example.com', 'test@example.com', 'user@example.com'];
        return { wasBlacklisted: blackList.includes(data) };
    }

    /**
     * Verificação do e-mail
     * @param {string} data Recebe o dado do campo do email para dar início as verificações
     * @returns Retorna um array de objetos com os resultados dos testes no formato booleano
     */
    verify(data) {
        let result = [];
        let checks = [this.emailModel.checkFilling(data), this.emailModel.emailFormat(data), this.emailModel.emailBlacklist(data)];
        checks.forEach(check => {
            result.push(check);
        });
        return result;
    }

}

export class passwordModel {

    constructor() {
        this.passwordModel = passwordModel;
    }

    // Verifica se a senha foi preenchida
    static checkFilling(data) {
        return ({ itWasFilled: data.length > 0 })
    }

    // Verifica se a senha possue no mínimo 8 caracteres
    static passwordLength(data) {
        return { hadLengthValidation: data.length >= 8 };
    }

    // Verifica se a senha possue mo mínimo 1 letra maiúscula, um número e um caractere especial
    static passwordFormat(data) {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]*$/;
        return { hadFormatValidation: regex.test(data) };
    }

    // Verifica se a senha foi memorizada através de uma confirmação de senha
    static verifyPasswordSMatches(password, confirmPassword) {
        return { passwordsMatch: password === confirmPassword }
    }

    /**
     * Verificação e validação das senhas
     * @param {string} password Recebe a senha digitada no campo
     * @param {string} confirmPassword Recebe a confirmação de senha digitada no campo
     * @returns Retorna um array de objetos com os resultados das verificações
     */
    verify(password, confirmPassword) {
        let result = [];
        let checks = [this.passwordModel.checkFilling(password), this.passwordModel.passwordLength(password), this.passwordModel.passwordFormat(password), this.passwordModel.verifyPasswordSMatches(password, confirmPassword)];
        checks.forEach(check => {
            result.push(check);
        })
        return result;
    }

}
