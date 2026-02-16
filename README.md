# Landing Page Angular

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white)](https://angular.dev/)

Landing page institucional para consultoria de software, desenvolvida com Angular 21 e preparada para deploy estatico na Vercel.

## Visao Geral

Este repositorio contem uma aplicacao Angular focada em conversao comercial:

- Hero section com proposta de valor
- Blocos de autoridade e qualidade
- CTA para contato
- Formulario de newsletter integrado com endpoint HTTP

## Stack Tecnica

- Angular 21
- TypeScript
- SCSS
- Angular Router
- Angular HttpClient
- Vercel (deploy estatico)

## Estrutura do Projeto

O app fica dentro da pasta `landingpage/`:

```text
landing-page-angular/
|-- landingpage/
|   |-- src/
|   |-- angular.json
|   |-- package.json
|   |-- vercel.json
|   `-- ...
`-- README.md
```

## Requisitos

- Node.js 20+
- npm 10+

## Como Rodar Localmente

1. Entre na pasta da aplicacao:

```bash
cd landingpage
```

2. Instale dependencias:

```bash
npm ci
```

3. Inicie em modo desenvolvimento:

```bash
npm start
```

4. Acesse:

`http://localhost:4200`

## Scripts Disponiveis

Na pasta `landingpage/`:

- `npm start`: sobe o servidor local (`ng serve`)
- `npm run build`: gera build de producao
- `npm run watch`: build em watch mode
- `npm test`: executa testes

## Build de Producao

```bash
cd landingpage
npm run build
```

Saida gerada em:

`landingpage/dist/landingpage/browser`

## Deploy na Vercel

Este projeto esta configurado para SPA estatico (sem SSR).

### Configuracoes recomendadas no painel da Vercel

- Root Directory: `landingpage`
- Build Command: `npm run build`
- Output Directory: `dist/landingpage/browser`

### Fallback de rotas SPA

Arquivo `landingpage/vercel.json` usa:

- `handle: filesystem` para servir arquivos reais
- rewrite para `/index.html` nas demais rotas

## Newsletter / Endpoint

O envio do formulario usa endpoint HTTP definido em:

`landingpage/src/app/services/newsletter.ts`

Se quiser trocar endpoint, altere a propriedade `endpointUrl` nesse arquivo.

## Solucao de Problemas

### 404 na Vercel apos deploy

Verifique:

1. Root Directory esta como `landingpage`
2. Output Directory esta como `dist/landingpage/browser`
3. `vercel.json` esta dentro de `landingpage/`
4. Rode novo deploy sem cache

### Build local falhando

1. Confirme versao do Node (`node -v`) >= 20
2. Reinstale dependencias:

```bash
cd landingpage
Remove-Item -Recurse -Force node_modules
npm ci
```

## Boas Praticas para Evolucao

- Centralizar novas cores em `src/color-variables.scss`
- Manter componentes pequenos e reutilizaveis
- Evitar estilos hardcoded quando ja existir variavel SCSS
- Validar `npm run build` antes de cada deploy
