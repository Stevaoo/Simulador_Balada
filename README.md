# Sistema de Gerenciamento para Balada

## Participante/Autor
- Stevão Severo Rodrigues

## Descrição

Este projeto é um sistema de gerenciamento para baladas. O objetivo é permitir a gestão eficiente de eventos, vendas de ingressos, controle de acesso, e análise de desempenho. O sistema oferece funcionalidades para criar e gerenciar eventos, vender ingressos, controlar o acesso dos clientes e gerar relatórios detalhados.

## Funcionalidades

- **Gestão de Eventos**
  - Criação, edição e remoção de eventos.
  - Definição de detalhes dos eventos como data, hora, local e capacidade máxima.
  - Gerenciamento de preços dos ingressos e categorias (por exemplo, VIP, normal).

- **Venda de Ingressos**
  - Compra de ingressos online.
  - Atualização da disponibilidade de ingressos em tempo real.
  - Gerenciamento do status dos ingressos (válido, usado, cancelado).

- **Controle de Acesso**
  - Verificação da validade dos ingressos na entrada.
  - Registro da entrada e saída de clientes.
  - Geração de relatórios de acessos.

- **Análise e Relatórios**
  - Geração de relatórios sobre vendas de ingressos, frequência de eventos e desempenho financeiro.
  - Exibição de estatísticas de eventos e acessos.

- **Gerenciamento de Funcionários**
  - Gestão de detalhes dos funcionários e seus horários de trabalho.
  - Atribuição de funções específicas para eventos (por exemplo, segurança, recepção).

## Modelagem Entidade-Relacionamento

O sistema é modelado com as seguintes entidades e relacionamentos:

- **Evento**
  - Atributos: `id_evento`, `nome`, `descricao`, `data`, `hora_inicio`, `hora_fim`, `local`, `preco_ingresso`, `capacidade_maxima`
  
- **Ingresso**
  - Atributos: `id_ingresso`, `id_evento`, `id_cliente`, `data_compra`, `status` (válido, usado, cancelado)
  
- **Cliente**
  - Atributos: `id_cliente`, `nome`, `email`, `telefone`, `data_nascimento`
  
- **Funcionário**
  - Atributos: `id_funcionario`, `nome`, `cargo`, `horario_trabalho`
  
- **Relatório**
  - Atributos: `id_relatorio`, `tipo`, `data_inicio`, `data_fim`, `descricao`

- **Banco de Dados:** Utilizado MySQL.


## Comandos para BUILD
1. Para a primeira build, instale todas as dependências NPM do projeto:
```bash
npm install typescript --save-dev
```
2.Transpilação para JavaScript: Instale os tipos necessários para a transpilação do projeto:
```bash
npm install @types/readline-sync --save-dev
```
3. Instalação do readline-sync: Instale o pacote readline-sync, que é utilizado para interação com o usuário:
```bash
npm install readline-sync
```
4. Transpile o Código TypeScript para JavaScript: Se estiver usando TypeScript, compile o código para JavaScript com o comando:
```bash
npx tsc
```

