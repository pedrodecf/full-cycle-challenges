# Full Cycle 3.0 - Docker | Desafio Go

- [x] Realizar um print da mensagem "Full Cycle Rocks!!" como resultado final;
- [x] Ter menos de 2MB

### Executar a imagem

Para executar a imagem Docker diretamente do repositório Docker Hub, utilize o comando:

```sh
docker run spedrodecf/fullcycle
```

### Construir e executar a imagem localmente

Se preferir, você pode construir e executar a imagem localmente utilizando os seguintes comandos:

```sh
docker build -t spedrodecf/fullcycle .
docker run --rm spedrodecf/fullcycle
```

### Verificar o tamanho da imagem

Para verificar o tamanho da imagem Docker, utilize o comando:

```sh
docker images spedrodecf/fullcycle
```

O resultado esperado é similar a este:

```
REPOSITORY             TAG       IMAGE ID       CREATED         SIZE
spedrodecf/fullcycle   latest    04336cf3f982   2 minutes ago   1.95MB
```