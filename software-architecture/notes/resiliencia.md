# Arquitetura: Performance, Escalabilidade e Resiliência

## Resiliência

Resiliência é um conjunto de estratégias adotadas intencionalmente para a adaptação de um sistema quando uma falha ocorre. Ter estratégias de resiliência nos possibilita minimizar os riscos de perda de dados e transações importantes para o negócio.

### Estratégias

#### **Proteger e Ser Protegido**:
- Sistemas em arquitetura distribuída:
  - Adotar mecanismos de autopreservação para garantir sua operação com qualidade.
  - Não pode ser "egoísta" ao ponto de realizar mais requisições em um sistema que está falhando.
  - Um sistema lento muitas vezes é pior que um sistema fora do ar (efeito dominó).

- **Health Check**:
  - Monitorar a "saúde" do sistema.
  - Um sistema que não está saudável possui uma chance de se recuperar caso o tráfego pare temporariamente.
  - Health check de qualidade é crucial para detectar problemas antes que afetem os usuários.
  - Exemplo: Implementar health checks periódicos em serviços críticos para garantir que eles estejam operando corretamente.

- **Rate Limiting**:
  - Protege o sistema baseado no que ele foi projetado para suportar.
  - Preferência programada por tipo de cliente.
  - Exemplo: Limitar o número de requisições por minuto por usuário para evitar sobrecarga no sistema.

- **Circuit Breaker**:
  - Protege o sistema fazendo com que as requisições feitas para ele sejam negadas (ex: 500).
  - Circuito fechado = requisições chegam normalmente.
  - Circuito aberto = requisições não chegam no sistema, erro instantâneo ao cliente (sem load).
  - Circuito meio aberto = permite uma quantidade limitada de requisições para verificação se o sistema tem condições de voltar ao ar integralmente.
  - Exemplo: Utilizar bibliotecas como Hystrix ou Resilience4j para implementar circuit breakers.

- **API Gateway**:
  - Centraliza todas as requisições e aplica regras políticas para continuar ou negar a requisição.
  - Garante que requisições "inapropriadas" não cheguem até o sistema (ex: usuário não autenticado).
  - Implementa políticas de rate limiting, health check e etc.
  - Exemplo: Usar Kong ou AWS API Gateway para gerenciar e proteger as APIs.

- **Service Mesh**:
  - Controla o tráfego da rede.
  - Evita implementação de proteção pelo próprio sistema.
  - A service mesh provê uma forma de você conseguir olhar tudo o que está acontecendo entre a comunicação entre seus sistemas e aplicar esse tipo de comportamento de rate limiting, circuit breaker, políticas de retry e etc, diretamente na rede porque você tem acesso aos proxies.
  - mTLS (Mutual TLS) para comunicação segura entre serviços.
  - Exemplo: Implementar Istio ou Linkerd para gerenciar a comunicação entre microsserviços.

- **Comunicação Assíncrona**:
  - Evita perda de dados.
  - Não há perda de dados no envio de uma transação se o servidor estiver fora.
  - Servidor pode processar a transação em seu tempo quando estiver online.
  - Entender com profundidade o message broker / sistema de stream.
  - Exemplo: Utilizar RabbitMQ ou Apache Kafka para gerenciar a comunicação assíncrona entre serviços.

