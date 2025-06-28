# Project Blog Notes

- Create a special file name `next.config/js` using `module.exports = {}` for nodejs is the same as frontend `export default`
- Can also return as a function `module.exports = () => { **add condition logics**  }`
- Support env `https://nextjs.org/docs/pages/api-reference/config/next-config-js/env` to gain access to `process.env.customKey`

as an object
```
module.exports = {
  env: {
    mongodb_username: 'xxx',
    mongodb_password: 'xxx',
    mongodb_clustername: 'xxx',
    mongodb_database: 'xxx',
  },
}
```

as a function

````
module.exports = () => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'xxx',
        mongodb_password: 'xxx',
        mongodb_clustername: 'xxx',
        mongodb_database: 'xxx',
      },
    }
  }

  return {
    env: {
        mongodb_username: 'xxx',
        mongodb_password: 'xxx',
        mongodb_clustername: 'xxx',
        mongodb_database: 'xxx',
    },
  }
}
````

npm run build --> create the production build (.next folder)
npm start --> run the server of the production build

## Using secret .env
Don't need to install dotenv package for next.js itself since process.env is already build-in
```
// import dotenv from 'dotenv'
// dotenv.config()
```

example are 
```
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ secret: process.env.MY_SECRET });
}

// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  console.log(process.env.MY_SECRET); // Available at build time
  return NextResponse.next();
}

// next.config.js
const nextConfig = {
  env: {
    MY_API_KEY: process.env.MY_API_KEY,
  },
};

// pages/index.js
export async function getServerSideProps() {
  const apiKey = process.env.MY_API_KEY;
  // Fetch data from external API
  return { props: { apiKey } };
}
module.exports = nextConfig;

```

