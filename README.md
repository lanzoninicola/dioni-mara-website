# Remix 1.7.5 starter with ExpressJS adapter (Typescript support)!

- [Remix Docs](https://remix.run/docs)

## TODO

- [ ] Dockerize the app

## Development

From your terminal:

```sh
npm run dev
```

This will start the Express server at port 3000. It will automatically reload your browser when you make changes to your code.

### Note:

Sometimes after executing `npm run dev` you may see an error like `Error: Cannot find module 'server.js'`.
To fix this, run `npm run build:server` and then `npm run dev` again.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.
