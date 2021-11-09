<h2 align="center">NeoStore | Concept E-commerce responsive website</h2>
## About

'NeoStore' is a responsive e-commerce concept store created with React.js and Next.js for the NeoMacro challenge.

### Features

- Desktop and Mobile versions
- [DATO CMS](https://www.datocms.com) headless CMS back end
- Product Search
- Search Filter by Rating
- Search Filer by Max. and Min. price
- Add to Cart

## Setup

### Project Dependencies

First, install the project dependencies:

```bash
yarn
```

### DATO CMS API Token

Rename '.env.local.example' file in the project root folder to '.env.local' and insert your DATO CMS API Token:

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
