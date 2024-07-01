# Full Cycle 3.0 - Docker | Desafio Ngnix, Docker e Node

- [x] Utilizar ngnix como proxy reverso na porta 8080;
- [x] Aplicação em node, que adicionará um registro na tabela people em um banco de dados MySql

### Executar a aplicação

Para executar a aplicação é necessário apenas rodar o seguinte comando docker:

```sh
docker compose up -d --build
```

Após isso a aplicação estará disponível na porta 3000 (padrão) e 8080 (ngnix)

```
http://localhost:3000/
```
ou
```
http://localhost:8080/
```