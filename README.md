# api-films
Backend that fetches information from the public Star Wars API and is used to create a new movie and series management application. It is developed in Node.js using Nest.js.

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

[ORM Prisma](https://www.prisma.io/)

## Installation
Run:

```bash
$ npm install
```

To start the DB, run:

```bash
npm run db:dev:up
```

Open Prisma interface to see the database:

```bash
npx prisma studio
```



## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## api-films endpoints

- Endpoint for user registration.
- Endpoint for user login and access token retrieval.
- Endpoint for retrieving the list of movies.
- Endpoint for retrieving the details of a specific movie. Only "Regular Users" should have access to this endpoint.
- Endpoint for creating a new movie. Only "Administrators" should have access to this endpoint.
- Endpoint for updating the information of an existing movie. Only "Administrators" should have access to this endpoint.
- Endpoint for deleting a movie. Only "Administrators" should have access to this endpoint.

## Swagger Documentation
[Swagger UI](http://localhost:3000/api-films)
[Generate and download a Swagger JSON file](http://localhost:3000/api-films-json)

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
