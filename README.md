<h2 align="center">NeoStore | Concept e-commerce responsive website</h2>

## About

Responsive concept e-commerce website created with React and [Next.js](https://www.nextjs.org) for the NeoMacro challenge. Declarative UI built with [Chakra-UI](https://www.npmjs.com/package/@chakra-ui/react) and forms with [react-hook-form](https://react-hook-form.com/).

### Features

- Incremental Static Regeneration (ISR) with [Next.js](https://www.nextjs.org)
- [DATO CMS](https://www.datocms.com) headless CMS back end
- Product Search
- Search Filter by Rating
- Search Filer by Max. and Min. price
- Add to Cart
- Desktop and Mobile versions

## Setup

### Dependencies

First, install the project dependencies:

```bash
yarn
```

### API Token

Rename '.env.local.example' file in the project root folder to '.env.local' and insert your [DATO CMS](https://www.datocms.com) API Token:

```bash
DATO_CMS_READ_ONLY_API_TOKEN='<YOUR DATO CMS API TOKEN>'
DATO_CMS_API_ENDPOINT='https://graphql.datocms.com'
```

## Run server

Start the local server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
