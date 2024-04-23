# User-data-validation
Essa API foi criada por mim com o intuito de fazer uma verificação mais básica de valores como email e senha. Para usar acesse [Como usar](#como-usar-a-api-em-conjunto-com-a-seu-código)


## Como funciona
### A API executa as seguintes funções:

#### E-mail:
1. Verifica se o campo foi preenchido.

2. Verifica se o email possue um formato válido:

    I. Deve possuir um '@'.

    II. Não deve possuir espaços.
    
3. Verifica se o email está numa lista negra, ou seja, ele NÃO deve ser igual a um email dessa lista, pois pode ser um email falso.

-------------------

#### Senha:
1. Verifica se o campo foi preenchido.

2. Verifica se a senha possue um tamanho mínimo de 8 caracteres.

3. Verifica se a senha possue um formato válido:

    I. Deve possuir no mínimo 1 letra maiúscula.

    II. Deve possuir no mínimo 1 número.

    III. Deve possuir no mínimo 1 caractere especial.
    
4. Em conjunto com a confirmação de senha, verifica se as duas estão iguais.
---------------------------------------------------------


## Como usar a API em conjunto com a seu código
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
Esse comando rodará na porta 9090

---
Você poderá dar continuidade com o seu código utilizando de um middleware que só dará sequência ao seu código se passar pela validação.


Em breve adicionarei mais detelhes, fiquem no aguardo :)

