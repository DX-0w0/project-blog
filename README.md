# Project Blog

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