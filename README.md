# Perla

[Piwegro.lol](https://piwegro.lol) frontend app

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t perla .`.
1. Run your container: `docker run -p 3000:3000 --env-file .env perla`.

You can view your images created with `docker images`.

## Running locally

### Using production build

Build the app using:

```bash
npm run build
# or
yarn build
```

And start it with:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Using development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
