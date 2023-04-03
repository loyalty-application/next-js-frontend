This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Project Structure

##### `pages`
Pages that the application has , follows [Next's file-system based routing](https://nextjs.org/docs/routing/introduction)
When naming page componenets, name them like TransactionPage

##### `components`
Reusable components, corresponds with the `pages` folder

##### `config`
Configuration for the application, for example: 
ENV Variables, Constants, Enums 

##### `hooks`
Hooks used in the application, for example:
AuthContext's hook useAuth for authentication 

