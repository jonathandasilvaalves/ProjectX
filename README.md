# 🚀 Projeto X - Nest.js com GraphQL e PostgreSQL

✨✨✨ Este projeto utiliza o framework [Nest.js](https://nestjs.com/) para a estruturação do backend, implementação de [GraphQL](https://graphql.org/) como linguagem de consulta, banco de dados [PostgreSQL](https://www.postgresql.org/) gerenciado com [Prisma](https://www.prisma.io/) como ORM, e containerização via [Docker](https://www.docker.com/). ✨✨✨

## Tecnologias Utilizadas

### Nest.js

✨ Nest.js é um framework para construção de aplicações Node.js escaláveis e eficientes, utilizando TypeScript e conceitos como injeção de dependência e modularização. ✨

### GraphQL

✨ GraphQL é uma linguagem de consulta que permite que os clientes requisitem apenas os dados que precisam, reduzindo o consumo de rede e melhorando a eficiência no consumo de APIs. ✨

### PostgreSQL

✨ PostgreSQL é um sistema de banco de dados relacional open-source amplamente utilizado pela sua robustez e conformidade com padrões. ✨

### Prisma

✨ Prisma é um ORM moderno que simplifica o trabalho com bancos de dados, oferecendo um mapeamento intuitivo entre o banco e os modelos de dados da aplicação. ✨

### Docker

✨ Docker permite a criação de ambientes isolados para execução de aplicações, facilitando a configuração e execução consistente entre diferentes máquinas. ✨

## Configuração e Execução do Projeto

### 1. Subindo o Ambiente Docker

✨ Certifique-se de que você possui o Docker e o Docker Compose instalados em sua máquina. Para subir os containers, execute o seguinte comando na raiz do projeto: ✨

```bash
docker-compose up -d
```

✨ Este comando irá iniciar os containers definidos no arquivo `docker-compose.yml`. ✨

### 2. Criando o Container do Banco de Dados

✨ Caso seja necessário criar o container manualmente para o banco de dados, utilize o seguinte comando: ✨

```bash
docker run -d --name postgres -p 5432:5432 -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=app bitnami/postgresql
```

✨ Este comando criará um container isolado para o PostgreSQL, baseado nas configurações do arquivo `docker-compose.yml`. ✨

### 3. Instalando as Dependências

✨ Antes de prosseguir, instale as dependências do projeto executando: ✨

```bash
npm install
```

✨ Este comando garantirá que todas as dependências necessárias estejam disponíveis. ✨

### 4. Realizando a Migration do Banco

✨ Após o ambiente Docker estar em execução, aplique as migrations para configurar o banco de dados: ✨

```bash
npx prisma migrate dev
```

✨ Este comando irá sincronizar os esquemas definidos no Prisma com o banco de dados PostgreSQL. ✨

### 5. Iniciando o Servidor

✨ Por fim, inicie o projeto utilizando o seguinte comando: ✨

```bash
npm run dev:server
```

✨ Este comando irá iniciar o servidor em modo de desenvolvimento. ✨

## Estrutura do Projeto

✨ - `src/`: Contém o código-fonte do projeto.

- `prisma/`: Contém os arquivos de configuração e esquemas do Prisma.
- `docker-compose.yml`: Configuração do ambiente Docker. ✨

## Licença

✨ Este projeto é licenciado sob a MIT License. Consulte o arquivo LICENSE para mais detalhes. ✨

