# Arquitetura: Performance, Escalabilidade e Resiliência

## Performance
Desempenho de um software para completar determinado workload.

### Unidades para medir a performance de um software:
- Latência (response time)
- Throughput

Performance ≠ Escalabilidade

### Métricas para medir a performance:
- Diminuir a latência (em ms)
- Tomar cuidado com chamadas externas (ex: API dos Correios)
- Aumentar o throughput
  - Aumentar a quantidade de requisições
  - Diretamente ligado à latência

### Principais razões para baixa performance:
- Processamento ineficiente
- Recursos computacionais limitados
- Trabalho de forma bloqueante (fazer uma requisição em que a aplicação fica bloqueada esperando a requisição terminar)
- Acesso serial a recursos

### Principais formas para aumentar a eficiência:
- Escalabilidade computacional (análise prévia para saber o componente)
- Lógica por trás do software (algoritmos, queries, etc.)
- Concorrência e paralelismo
- Banco de dados (modelagem correta, banco correto para tal uso)
- Caching

> "Concorrência é sobre lidar com muitas coisas ao mesmo tempo. Paralelismo é fazer muitas coisas ao mesmo tempo".

## Capacidade Computacional: Escala Vertical vs Horizontal
- **Escala Vertical**: aumentar os recursos computacionais da máquina
- **Escala Horizontal**: aumentar a quantidade de máquinas (com load balancer)

## Caching
- Edge computing (cache de toda a plataforma, ex: Cloudflare)
- Dados estáticos (imagens, CSS)
- Página web (HTML cacheado com edge computing, cache por minuto, ex: 5 min)
- Funções internas 
  - Evitar processamento de algoritmos pesados
  - Acesso a banco de dados
- Objetos

### Caching Exclusivo vs Compartilhado
- **Exclusivo**
  - Baixa latência
  - Duplicado entre nós
  - Exclusivo de uma única máquina
  - Problemas relacionados a sessões

- **Compartilhado**
  - Latência maior (cache central)
  - Não há duplicação
  - Sessões compartilhadas
  - Banco de dados externos (ex: podendo cachear um MySQL em um Redis)

### Cache: Edge Computing
Consegue fornecer informações mais próximas aos usuários sem necessariamente bater no seu servidor.

- Cache realizado mais próximo ao usuário
- Evita a requisição chegar até o cloud provider / infra
- Normalmente para arquivos estáticos
  - Exemplo: imagens, CSS, HTMLs estáticos são enviados para Cloudflare a fim de evitar que o usuário bata a requisição em um Kubernetes
- CDN