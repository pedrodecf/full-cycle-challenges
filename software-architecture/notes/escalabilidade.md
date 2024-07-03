# Arquitetura: Performance, Escalabilidade e Resiliência

## Escalabilidade

Escalabilidade é a capacidade de sistemas suportarem o aumento (ou redução) dos workloads incrementando (ou reduzindo) o custo em menor ou igual proporção.

- **Performance**: reduzir latência e aumentar o throughput.
- **Escalabilidade**: aumentar ou diminuir o throughput adicionando ou removendo **capacidade computacional**.

### Escalando Aplicações

- **Vertical**: limites de hardware.
- **Horizontal**: mais máquinas.

Para escalar um software horizontalmente, é necessário **descentralizar**.

- Servidor de aplicações (disco efêmero) diferente dos servidores de assets.
- Cache centralizado em um servidor de cache (cache compartilhado).
- Sessões centralizadas em um servidor de cache.
- Upload/gravação de arquivos.

> "Tudo pode ser destruído e criado facilmente."

### Escalando Banco de Dados

- Aumentando recursos computacionais.
- Distribuindo responsabilidades (escrita vs leitura).
- Shards de forma horizontal.
- Serverless.

### Otimização de Queries e Índices

- Ter um sistema de APM para entender quais queries estão rodando e seus problemas.
- Trabalhar com índices de forma consciente.
- Usar `EXPLAIN` nas queries para melhorar pontos mais lentos.
- **CQRS**: separar escrita e leitura.

## Proxy Reverso

Um proxy reverso é um servidor que fica na frente dos servidores web e encaminha as solicitações do cliente (por exemplo, navegador web) para esses servidores web.
