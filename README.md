# Estágio Node - API de Viagens ✈️

Este projeto foi desenvolvido como parte do estágio, utilizando Node.js, Sequelize e PostgreSQL. A API gerencia informações sobre viagens, permitindo que os usuários realizem operações como criação, leitura, atualização e exclusão de registros de viagens.

## 📦 Tecnologias Usadas
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criar a API.
- **Sequelize**: ORM para manipulação do banco de dados PostgreSQL.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados.
- **Cors**: Middleware para habilitar o compartilhamento de recursos entre diferentes origens.

## 🚀 Como Rodar o Projeto

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/projeto-estagio-node.git
2. Instalar Dependências
bash
Copiar código
cd projeto-estagio-node
npm install
3. Configuração do Banco de Dados
Certifique-se de ter o PostgreSQL instalado e crie o banco de dados estagio com as credenciais configuradas no arquivo de conexão.

4. Iniciar o Servidor
bash
Copiar código
npm start
O servidor estará disponível na URL: http://localhost:8080.

🧑‍💻 Endpoints da API
GET /getAll
Retorna todas as viagens cadastradas.

POST /addEmp
Adiciona uma nova viagem.

Exemplo de JSON enviado no body:

json
Copiar código
{
  "pais": "Brasil",
  "local": "São Paulo",
  "quando": "2026-05-15",
  "url_bandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png"
}
PUT /updateEmp/:id
Atualiza os dados de uma viagem existente.

DELETE /deleteEmp/:id
Deleta uma viagem pelo ID.

📸 Exemplo de Teste com Postman
Abaixo, você pode ver um exemplo de como interagir com a API usando o Postman:


🛠️ Funcionalidades
Cadastro de Viagens: Criação de novos registros de viagens, incluindo informações sobre o país, local, data e a URL da bandeira do país.

Leitura de Viagens: Consulta de todas as viagens armazenadas no banco de dados.

Edição de Viagens: Atualização dos dados de uma viagem específica.

Exclusão de Viagens: Remoção de uma viagem do banco de dados.

⚙️ Estrutura de Pastas
bash
Copiar código
/src
  /controller  # Lógica dos controladores (criar, editar, deletar, ler)
  /model      # Modelos de dados e esquema do banco
  /postgres   # Conexão e configuração do banco de dados
  /view       # Rotas da API
  /config     # Configurações gerais do projeto
🚨 Erros Comuns
Erro 404: Nenhuma viagem encontrada.

Erro 400: Algum campo obrigatório não foi preenchido.

Erro 500: Problemas no servidor ou banco de dados.

👨‍💻 Contribuindo
Faça um fork deste repositório.

Crie uma branch para sua modificação (git checkout -b feature/MinhaFeature).

Realize suas mudanças e faça um commit (git commit -am 'Adiciona nova funcionalidade').

Envie para o repositório remoto (git push origin feature/MinhaFeature).

Crie um pull request.

📅 Data de Criação
27 de Março de 2025

📜 Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

csharp
Copiar código

Esse README pode ser ajustado conforme necessário, mas está bem estruturado e inclui as informações principais sobre como configurar e usar o projeto, além de fornecer uma descrição clara do que a API faz.

Você disse:
agora coloca isso tudo em readme.me 

O ChatGPT disse:
Aqui está o conteúdo do arquivo README.md com todas as informações que você pediu:

markdown
Copiar código
# Estágio Node - API de Viagens ✈️

Este projeto foi desenvolvido como parte do estágio, utilizando Node.js, Sequelize e PostgreSQL. A API gerencia informações sobre viagens, permitindo que os usuários realizem operações como criação, leitura, atualização e exclusão de registros de viagens.

## 📦 Tecnologias Usadas
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criar a API.
- **Sequelize**: ORM para manipulação do banco de dados PostgreSQL.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados.
- **Cors**: Middleware para habilitar o compartilhamento de recursos entre diferentes origens.

## 🚀 Como Rodar o Projeto

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/projeto-estagio-node.git
2. Instalar Dependências
bash
Copiar código
cd projeto-estagio-node
npm install
3. Configuração do Banco de Dados
Certifique-se de ter o PostgreSQL instalado e crie o banco de dados estagio com as credenciais configuradas no arquivo de conexão.

4. Iniciar o Servidor
bash
Copiar código
npm start
O servidor estará disponível na URL: http://localhost:8080.

🧑‍💻 Endpoints da API
GET /getAll
Retorna todas as viagens cadastradas.

POST /addEmp
Adiciona uma nova viagem.

Exemplo de JSON enviado no body:

json
Copiar código
{
  "pais": "Brasil",
  "local": "São Paulo",
  "quando": "2026-05-15",
  "url_bandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png"
}
PUT /updateEmp/:id
Atualiza os dados de uma viagem existente.

DELETE /deleteEmp/:id
Deleta uma viagem pelo ID.

📸 Exemplo de Teste com Postman
Abaixo, você pode ver um exemplo de como interagir com a API usando o Postman:


🛠️ Funcionalidades
Cadastro de Viagens: Criação de novos registros de viagens, incluindo informações sobre o país, local, data e a URL da bandeira do país.

Leitura de Viagens: Consulta de todas as viagens armazenadas no banco de dados.

Edição de Viagens: Atualização dos dados de uma viagem específica.

Exclusão de Viagens: Remoção de uma viagem do banco de dados.

⚙️ Estrutura de Pastas
bash
Copiar código
/src
  /controller  # Lógica dos controladores (criar, editar, deletar, ler)
  /model      # Modelos de dados e esquema do banco
  /postgres   # Conexão e configuração do banco de dados
  /view       # Rotas da API
  /config     # Configurações gerais do projeto
🚨 Erros Comuns
Erro 404: Nenhuma viagem encontrada.

Erro 400: Algum campo obrigatório não foi preenchido.

Erro 500: Problemas no servidor ou banco de dados.

👨‍💻 Contribuindo
Faça um fork deste repositório.

Crie uma branch para sua modificação (git checkout -b feature/MinhaFeature).

Realize suas mudanças e faça um commit (git commit -am 'Adiciona nova funcionalidade').

Envie para o repositório remoto (git push origin feature/MinhaFeature).

Crie um pull request.

📅 Data de Criação
27 de Março de 2025
