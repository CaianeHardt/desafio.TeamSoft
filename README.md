
<h2 align="center">:file_cabinet: # desafio.TeamSoft </h2>


## :books: Funcionalidades
*  Projeto de uma API REST, que tem como objetivo cadastro, leitura, alteração e remoção de duas entidades: Cliente e de seus endereços. Note, que cada cliente pode ter mais de um endereço vinculado ao seu CNPJ.

## :wrench: Tecnologias e ferramentas utilizadas
* Javascript, Node.js, Express, Sequelize, MySQL, VSCode e DBeaver.

## :rocket: Rodando o projeto
Para rodar o projeto é necessário clonar o mesmo e seguir os seguintes passos:

Subir um banco de dados local e rodar os scripts no arquivo scriptDB/initialize.sql

Na primeira vez rodar no terminal na raiz projeto: 
```
$ npm install
```
Para rodar o projeto: 
```
$ npm start
```

## Os endpoints para utilização das funcionalidades são:

```
baseUrl = http://localhost:3006

Clientes
GET {baseUrl}/customers (Recupera uma lista de todos os clientes)
GET {baseUrl}/customers/:cnpj (Recupera um cliente e seus endereços a partir do seu CNPJ)
POST {baseUrl}/customers (Cria um usuário a partir do JSON enviado via body)
    {
        "cnpj": "51905041000168",
        "corporateName": "TEAMSOFT TECNOLOGIA E SISTEMAS LTDA",
        "contactName": "Carvalho",
        "contact": "552189033185"
    }
PUT /customer/:id (Atualiza os dados do cliente com ID enviado no path e os dados enviados no body)
DELETE /customer/:id (Remove o cliente, e seus respectivos endereços, dono do ID enviado no path)

Endereços
GET {baseUrl}/addresses (Recupera uma lista de todos os endereços)
GET {baseUrl}/address/:id (Recupera um endereço a partir de seu ID)
POST {baseUrl}/customers/:id/address/ (Cria um endereço vinculado ao cliente do ID enviado no path e a partir do JSON enviado via body)
    {
        "street": "AV POSTMAN",
        "number": 3477,
        "addressComplement": "LADO A",
        "district": "VILA NOVA",
        "city": "CURITIBA",
        "state": "PR",
        "zipeCode": "08345-124"
    }
PUT {baseUrl}/address/:id (Atualiza os dados do endereço com ID enviado no path e os dados enviados no body)
DELETE {baseUrl}/address/:id (Remove o endereço dono do ID enviado no path)

```