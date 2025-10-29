# 🧪 Automação de Testes com Cypress + GitHub Actions

<div align="center">

![Cypress Logo](https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo.png)

✨ Projeto de automação de testes **E2E e API** utilizando **Cypress v15**, com relatórios profissionais e pipeline de **Integração Contínua (GitHub Actions)**.

🚀 Projeto moderno, limpo e com arquitetura escalável seguindo o padrão **Page Objects (Design Patterns)**.  
Feito com ❤️ por **Guilherme Vargas**

</div>

---

## 📋 **Sumário**
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [⚙️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🧠 Design Pattern (Page Objects)](#-design-pattern-page-objects)
- [🧾 Execução dos Testes](#-execução-dos-testes)
- [📊 Relatórios](#-relatórios)
- [🤖 Integração Contínua (GitHub Actions)](#-integração-contínua-github-actions)
- [🧱 Estrutura de Pastas](#-estrutura-de-pastas)
- [💡 Autor](#-autor)

---

## ⚙️ **Tecnologias Utilizadas**

| Tecnologia | Descrição |
|-------------|------------|
| 🧪 **Cypress v15** | Framework principal de automação E2E e API |
| 📘 **JavaScript (Node.js)** | Linguagem base do projeto |
| ☁️ **GitHub Actions** | Pipeline CI/CD automatizado |
| 🧱 **Page Object Model (POM)** | Estrutura modular e escalável para testes |

---

## 🧠 **Design Pattern (Page Objects)**

O projeto utiliza o padrão **Page Object Model (POM)** para manter o código limpo, reutilizável e fácil de manter.

📦 **Camadas principais:**
- `pages/` → contém as classes com os elementos e ações das telas  
- `e2e/` → contém os testes automatizados  
- `support/` → comandos customizados e configurações globais  
- `fixtures/` → massa de dados e payloads  
- `reports/` → relatórios gerados após execução

🧩 **Benefícios:**
- Reutilização de código  
- Melhor legibilidade e manutenção  
- Facilidade de integração com CI/CD  

---

## 🧾 **Execução dos Testes**

👉 Para rodar localmente:

```bash
npm run test
