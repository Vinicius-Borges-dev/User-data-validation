# User-data-validation
Essa API foi criada por mim com o intuito de fazer uma verificação mais básica de valores como email e senha. Para usar acesse [Como usar em conjunto com o seu código](#como-usar-a-api-em-conjunto-com-a-seu-código) ou [Como fazer as validações](#como-fazer-as-validações)


## Como funciona
### A API executa as seguintes funções:

#### E-mail:
1. Verifica se o campo foi preenchido.


    > E retorna como resposta um objeto booleano: itWasFilled


2. Verifica se o email possue um formato válido:

    I. Deve possuir um '@'.

    II. Não deve possuir espaços.

    > E retorna como resposta um objeto booleano: hadFormatValidation


    
3. Verifica se o email está numa lista negra, ou seja, ele NÃO deve ser igual a um email dessa lista, pois pode ser um email falso.

    > E retorna como resposta um objeto booleano: wasBlacklisted
-------------------

#### Senha:
1. Verifica se o campo foi preenchido.

    > E retorna como resposta um objeto booleano: itWasFilled

2. Verifica se a senha possue um tamanho mínimo de 8 caracteres.

    > E retorna como resposta um objeto booleano: hadLengthValidation

3. Verifica se a senha possue um formato válido:

    I. Deve possuir no mínimo 1 letra maiúscula.

    II. Deve possuir no mínimo 1 número.

    III. Deve possuir no mínimo 1 caractere especial.

    > E retorna como resposta um objeto booleano: hadFormatValidation
    
4. Em conjunto com a confirmação de senha, verifica se as duas estão iguais.

    > E retorna como resposta um objeto booleano: passwordsMatch
---------------------------------------------------------


## Como usar a API em conjunto com o seu código
Primeiramente, você deve clonar o repositório para a sua máquina usando a linha de comando:
```
git clone https://github.com/Vinicius-Borges-dev/User-data-validation.git
```
---
Instale todas as dependencias com o comando:
```
npm install
```
---
Em seguida, rode a API com o comando:
```
 npm run start-dev
```
Esse comando rodará na porta 9090 e você poderá dar continuidade com o seu código utilizando de um middleware que só dará sequência ao seu código se passar pela validação.

## Como fazer as validações
Para utilizar o os comandos da API você deve mencionar o(os) dado(os) do(os) campo(os) e qual validação você quer que seja executada, a menção dos objetos via **POST** deve seguir a seguinte ordem:

OBS: lembre-se de usar funções asincronas para realizar as consultas, seja com [async await](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function) ou [.then()](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)


    let data = {
        email : email.value,
        password : password.value,
        confirmPassword : confirmPassword.value;
    }   

## Comandos

O fetch para realizar a consulta sempre seguirá o mesmo padrão, a unica mudança será os dados via **POST** que serão enviados:

```
fetch("url", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados a serem enviados)
        });


<!-- Restante da função asíncrona -->
```

### email:

```
/auth/verifyEmail
```
Exemplo:
```
body: JSON.stringify(data.email)
```

o resultado irá retornar um json da seguinte forma:

    {
        "email": [
            {
                "itWasFilled": boolean
            },
            {
                "hadFormatValidation": boolean
            },
            {
                "wasBlacklisted": boolean
            }
        ]
    }



## Senha
```
auth/verifyPassword
```
Exemplo:
```
body: JSON.stringify(data.Password, data.confirmPassword)
```

o resultado irá retornar um json da seguinte forma:

    {
        "password": [
            {
                "itWasFilled": boolean
            },
            {
                "hadLengthValidation": boolean
            },
            {
                "hadFormatValidation": boolean
            },
            {
                "passwordsMatch": boolean
            }
        ]
    }


## Validação geral
```
auth/verifyAll
```
Exemplo:
```
body: JSON.stringify(data)
```
O resultado retornará um json no seguinte formato:

    {
        "Result": {
            "email": [
                {
                    "itWasFilled": boolean
                },
                {
                    "hadFormatValidation": boolean
                },
                {
                    "wasBlacklisted": boolean
                }
            ],
            "password": [
                {
                    "itWasFilled": boolean
                },
                {
                    "hadLengthValidation": boolean
                },
                {
                    "hadFormatValidation": boolean
                },
                {
                    "passwordsMatch": boolean
                }
            ]
        }
    }

---

Se não entendeu como os resultados são exibídos e quais são os seus significados, [Volte para a explicação](#como-funciona)
