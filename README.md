## Setup

### Project Dependencies

First, install the project dependencies:

```bash
yarn
```

### DATO CMS API Token

Rename '.env.local.example' file in the project root folder to '.env.local' and insert your DATO CMS API Token:

DATO_CMS_READ_ONLY_API_TOKEN='<YOUR DATO CMS API TOKEN>'
DATO_CMS_API_ENDPOINT='https://graphql.datocms.com'

## Run server

Start the local server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
