# Validador de CPF

A finalidade da biblioteca é fazer a validação do número de CPF.


# Requisitos:

Node.js
npm

## Como instalar:

$ npm install cpfvalidator-alramos

## Como utilizar:

```
node
> const test = require("cpfvalidator-alramos")
>
> test.cpfValidator("84994584087")
>
> // true
```
## Versão 1.0.0
```

Retorna true se o cpf é válido; false se não for.

> Não aceita letras
> Não aceita espaços
> Não aceita vazio
> Aceita apenas cpf com 11 dígitos completos
```