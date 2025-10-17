#  Portfólio Dinâmico com .NET e C#

<div align="center">

![C#](https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white) &nbsp; ![.NET](https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white) &nbsp; ![Microsoft SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white) &nbsp; ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) &nbsp; ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) &nbsp; ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

</div>

Este projeto é a materialização do meu portfólio profissional, desenvolvido com uma arquitetura moderna e desacoplada. Em vez de um site estático, construi uma **API RESTful robusta em .NET** que serve dinamicamente todas as minhas informações de carreira — de experiências e habilidades a projetos — a partir de um banco de dados **SQL Server**. O frontend, desenvolvido com **JavaScript puro**, consome essa API para criar uma experiência de usuário fluida e sempre atualizada.

---

## ✨ Funcionalidades Principais

* **Backend como Serviço (BaaS):** Uma API RESTful completa que gerencia todos os dados do currículo.
* **Persistência de Dados:** Uso do SQL Server com **Entity Framework Core** para um mapeamento objeto-relacional eficiente.
* **Frontend Dinâmico:** Interface reativa construída com JavaScript puro (Vanilla JS), que renderiza os dados recebidos da API, garantindo que o conteúdo esteja sempre sincronizado com o banco de dados.
* **Integração com APIs Externas:** Conexão em tempo real com a API oficial do GitHub para buscar e exibir meus repositórios públicos mais recentes.
* **Design Responsivo e Moderno:** Interface com tema *Dark Tech*, pensada para uma excelente experiência em qualquer dispositivo.

---

## 🏗️ Arquitetura do Projeto

A solução foi projetada com uma clara separação de responsabilidades, uma prática fundamental no desenvolvimento de software moderno.
* O **Frontend** é responsável unicamente pela exibição dos dados e interação com o usuário.
* A **API Backend** centraliza toda a lógica de negócio, acesso aos dados e comunicação com serviços externos.
* O **Banco de Dados** armazena de forma segura e estruturada todas as informações.

---

## 🛠️ Tecnologias Utilizadas

#### **Backend**
* C#
* .NET 7
* ASP.NET Core API
* Entity Framework Core 7

#### **Banco de Dados**
* Microsoft SQL Server

#### **Frontend**
* JavaScript (ES6+)
* HTML5
* CSS3

#### **Ferramentas e DevOps**
* Visual Studio 2022
* Git & GitHub
* Swagger (para documentação da API)
* SQL Server Management Studio (SSMS)

---

## ⚙️ Como Rodar o Projeto Localmente

Para executar este projeto em sua máquina, siga os passos abaixo.

#### **Pré-requisitos**
* [.NET 7 SDK](https://dotnet.microsoft.com/pt-br/download/dotnet/7.0)
* [SQL Server Express](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads)
* [SQL Server Management Studio (SSMS)](https://learn.microsoft.com/pt-br/sql/ssms/download-sql-server-management-studio-ssms)
* [Git](https://git-scm.com/downloads)

#### **Passos para Instalação**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/jaqfreitas5-coder/portfolio-dinamico-dotnet.git](https://github.com/jaqfreitas5-coder/portfolio-dinamico-dotnet.git)

    ```

2.  **Configure o Banco de Dados:**
    * No SSMS, crie um novo banco de dados chamado `PortfolioDB`.
    * Execute o script SQL fornecido no projeto para criar as tabelas e popular com os dados iniciais.

3.  **Configure e Rode o Backend (API):**
    * Abra a solução `PortfolioApi.sln` no Visual Studio 2022.
    * No arquivo `PortfolioApi/appsettings.json`, ajuste a string de conexão `DefaultConnection` para apontar para a sua instância local do SQL Server.
    * Pressione **F5** para iniciar a API. Uma janela do Swagger será aberta.

4.  **Rode o Frontend:**
    * Abra a pasta `frontend` no **Visual Studio Code**.
    * No arquivo `script.js`, verifique se a constante `API_BASE_URL` corresponde à porta em que sua API está rodando.
    * Instale a extensão "Live Server" no VS Code, clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".

---

## 📬 Contato

**Jaqueline Freitas**

* [LinkedIn](https://www.linkedin.com/in/jaqueline-freitas-a20568191/)
* Email: jaqfreitas5@gmail.com
