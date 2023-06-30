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
