# ✨ ConsultHype: Gestão de Talentos de Consultoria (Angular 17+)

> Uma aplicação web moderna para alocação de especialistas, construída com foco em **reatividade de estado** e **design premium** (Dark Mode).

-----

## 🌟 Principais Recursos e Destaques

  * **Design Sofisticado:** Interface **Dark Mode Premium** totalmente implementada com Tailwind CSS, garantindo uma experiência de usuário elegante e profissional.
  * **Gestão Reativa:** Utilização completa dos **Signals** (`signal()`, `computed()`) do Angular para um gerenciamento de estado eficiente, garantindo que a lista e os filtros sejam atualizados instantaneamente.
  * **Controle de Acesso:** Implementação de rotas protegidas e restrição de funcionalidades (adição/edição/remoção) baseadas no **Perfil do Usuário** (`Admin` vs. `Comum`).
  * **Filtro Inteligente:** Recurso de filtragem por especialização, utilizando `computed` Signals para alta performance na busca de consultores.

-----

## 🛠️ Stack Tecnológica

| Categoria | Tecnologia | Detalhes |
| :--- | :--- | :--- |
| **Framework** | **Angular v17+** | Componentes Standalone (sem NgModules) |
| **Estilização** | **Tailwind CSS** | Desenvolvimento rápido e design utilitário |
| **Estado** | **Angular Signals** | Otimização da reatividade e *change detection* |
| **Formulários** | **Reactive Forms** | Validação robusta para Login e Cadastro |
| **Navegação** | `@angular/router` | Roteamento modularizado |

-----

## 💻 Como Executar o Projeto

Este projeto é um aplicativo Angular padrão.

### 🔹 Pré-requisitos

Certifique-se de ter **Node.js** (LTS recomendado) e **Angular CLI** instalados globalmente.

```bash
# Instalar Angular CLI (se necessário)
npm install -g @angular/cli
```

### 🔹 1. Instalação de Dependências

```bash
# Na pasta raiz do projeto Angular
npm install
```

### 🔹 2. Execução

```bash
# Inicia o servidor de desenvolvimento com hot-reload
ng serve -o
```

O projeto será aberto automaticamente no seu navegador em: [http://localhost:4200](https://www.google.com/search?q=http://localhost:4200) 🌐

-----

## 🔑 Credenciais de Acesso (Mock)

Utilize as seguintes credenciais para testar as diferentes permissões do sistema.

| Papel | E-mail | Senha | Funcionalidades |
| :--- | :--- | :--- | :--- |
| **Administrador** | `admin@empresa.com` | `admin123` | **CRUD** (Criação, Edição e Exclusão) de Consultores |
| **Usuário Comum** | `user@empresa.com` | `user123` | Apenas **Visualização** e Filtro de Consultores |

-----

## 🗺️ Visão Geral das Rotas

| Rota | Componente | Permissão | Descrição |
| :--- | :--- | :--- | :--- |
| `/login` | `LoginComponent` | Pública | Tela de autenticação (Design Dark Mode) |
| `/consultants` | `ConsultantsPageComponent` | Autenticado | Listagem, filtro e visualização da equipe |
| `/consultants/new` | `ConsultantFormComponent` | **Admin** | Cadastro de um novo consultor |
| `/consultants/edit/:id` | `ConsultantFormComponent` | **Admin** | Edição de um consultor existente |
| `/about` | `AboutComponent` | Autenticado | Informações sobre a empresa ConsultHype |

-----

## 🧑‍💻 Desenvolvedor

Este projeto foi desenvolvido por:

### **Gabriel Barreto**
