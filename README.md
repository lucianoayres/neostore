<br />
<p align="center"><img src="https://user-images.githubusercontent.com/20209393/140961728-ad588d0b-c1c5-458d-ac46-0a65c56d87d3.png" /></p>

<h2 align="center">Concept e-commerce React + Next.js responsive website</h2>

## About

Responsive concept e-commerce website created with React and [Next.js](https://www.nextjs.org) for the NeoMacro challenge. Declarative UI built with [Chakra-UI](https://www.npmjs.com/package/@chakra-ui/react) and forms with [react-hook-form](https://react-hook-form.com/).

Original layout by [NeoMacro](https://www.neomacro.com.br).

### Screenshot

![Screenshot from 2021-11-09 13-12-54](https://user-images.githubusercontent.com/20209393/140961717-608c4e23-69e5-48ee-86ac-73babd4ae8cd.png)

### Features

- Incremental Static Regeneration (ISR) with [Next.js](https://www.nextjs.org)
- [Dato CMS](https://www.datocms.com) headless CMS back end
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
