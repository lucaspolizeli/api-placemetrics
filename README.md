# API Placemetrics
API criada para validar a ideia do Placemetrics, sendo utilizada para receber dados de um Arduino.

## Rotas
- https://placemetrics.herokuapp.com/
A rota pode ser utilizada para **GET**, ou **POST**. Se for necessário, existe a possibilidade de fazer o **GET** de apenas um registro, filtrando pelo IP. Por exemplo: 
  - https://placemetrics.herokuapp.com/192.168.0.1 irá retornar apenas os dados com o IP 192.168.0.1

## Envios e Requisições

- Para inserir algum dado na API, é necessário enviar os dados pelo **BODY**. A estrutura de dados que foi definida é: 

```json
{
	"temperature": 5,
	"humidity": 50,
	"userIp": "192.168.0.1"
}
```

- Ao efetuar uma requisição, a API deve retornar a seguinte estrutura: 

```json 
{
  "userData": [
    {
      "_id": "5caf63e61557e019a85cb637",
      "temperature": 5,
      "humidity": 50,
      "userIp": "192.168.0.1",
      "createdAt": "2019-04-11T15:57:26.672Z",
      "__v": 0
    }
  ]
}
```
