# IRONDARK V11

## Sobre o Projeto

IRONDARK V11 é uma plataforma web de e-commerce desenvolvida para comercialização de suplementos esportivos, combinando uma interface moderna com recursos de Inteligência Artificial para melhorar a experiência do usuário.

O sistema foi desenvolvido como projeto acadêmico, aplicando conceitos de desenvolvimento web, integração de APIs, design responsivo e atendimento automatizado por chatbot.

---

## Principais Recursos

### Loja Virtual Completa

* Catálogo de produtos
* Página individual para cada produto
* Tabela nutricional detalhada
* Benefícios e modo de uso
* Sistema de avaliações
* Carrinho de compras
* Checkout em múltiplas etapas

### Chatbot Inteligente

* Integração com Google Gemini 3.5 Flash
* Atendimento automatizado
* Respostas sobre produtos
* Informações sobre formas de pagamento
* Suporte ao usuário em tempo real
* Sistema de fallback para demonstrações

### Interface

* Tema IRONDARK exclusivo
* Design responsivo
* Compatibilidade com dispositivos móveis
* Animações e elementos visuais modernos
* Navegação intuitiva

---

## Tecnologias Utilizadas

### Front-end

* HTML5
* CSS3
* JavaScript

### Back-end

* Node.js
* Express.js

### Inteligência Artificial

* Google Gemini API
* Gemini 3.5 Flash

### Ferramentas

* Git
* GitHub
* VS Code

---

## Estrutura do Projeto

```txt
IRONDARK-V11/
│
├── assets/
│   ├── images/
│   ├── videos/
│   ├── icons/
│   └── chatbot/
│
├── index.html
├── produto.html
├── checkout.html
│
├── style.css
├── script.js
├── produto.js
│
├── server.js
├── package.json
│
├── docs/
│   ├── Relatorio.pdf
│   └── Apresentacao.pdf
│
└── README.md
```

---

## Funcionamento do Chatbot

O chatbot foi desenvolvido utilizando Node.js integrado à API Google Gemini 3.5 Flash.

Fluxo de funcionamento:

1. O usuário envia uma mensagem pelo site.
2. O front-end encaminha a solicitação ao servidor.
3. O servidor processa a requisição.
4. A API Gemini 3.5 Flash gera uma resposta contextualizada.
5. A resposta é enviada de volta ao usuário em tempo real.

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/irondark-v11.git
```

Acesse a pasta:

```bash
cd irondark-v11
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env`:

```env
GEMINI_API_KEY=SUA_CHAVE_AQUI
```

Execute o servidor:

```bash
npm start
```

Acesse:

```txt
http://localhost:3000
```

---

## Segurança

Nunca publique:

* Arquivos `.env`
* Chaves de API
* Tokens de autenticação
* Dados pessoais

Utilize um arquivo `.gitignore` adequado para proteger informações sensíveis.

---

## Objetivo Acadêmico

Este projeto foi desenvolvido para aplicação prática dos conceitos de:

* Desenvolvimento Web
* Engenharia de Software
* Integração de APIs
* Inteligência Artificial
* Design Responsivo
* Experiência do Usuário (UX)

---

## Autor(es)

Projeto desenvolvido pelo Grupo 4.

---

## Licença

Projeto desenvolvido exclusivamente para fins acadêmicos e educacionais.
