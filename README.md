# exercicio-CRUD-mongoDB

Crie um API com as rotas abaixo:  
 * GET exibe todos os resultados  
 * GET exibe por id  
 * POST cria novo cadastro  
 * PATCH atualiza dados do cadastro  
 * DELETE remove cadastro  

Use o modelo abaixo como base para criar sua Schema:  
```
 [{  
    nome: string,  
    email: string,  
    endereco:{  
        rua: string,  
        numero: string,  
        complemento: string,  
        cidade: string,  
        CEP: number  
            },  
    cliente premium: boolean  
}]  
```
Todos os campos são obrigatórios  
Não esqueça de instalar ( npm i ) os repositórios:
 * express
 * dotenv
 * mongoose

### Configurar o .env
```sh
PORT=
MONGODB_URI=
```

### Acessando as rotas do Boletim

- Exibe todos os resultados:
```sh
GET http://localhost:PORT/api/cliente
```

- Exibe por ID:
```sh
GET http://localhost:PORT/api/cliente/{id}
```

- Cria novo cadastro:
```sh
POST http://localhost:PORT/api/cliente
```
```json
{
	"nome": "Nome",
	"email": "Email",
	"endereco": {
		"rua": "Rua",
		"numero": "Numero",
        "complemento": "Complemento",
		"cidade": "Cidade",
		"cep": 0
	},
	"cliente_premium": false
}
```

- Altera cadastro:
```sh
PATCH http://localhost:PORT/api/cliente/{id}
```
```json
{
   "nome": "Nome"
}
```

- Deleta cadastro:
```sh
DELETE http://localhost:PORT/api/cliente/{id}
```
