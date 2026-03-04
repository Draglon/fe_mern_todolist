# How to run the project

## Install NVM

To install or update nvm, you can use the install script using cURL:

```bash
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

More detail in [NVM Readme](https://github.com/creationix/nvm#install-script)

Then install Node:

```bash
$ nvm install ^v22
$ nvm use ^v22
```

## Install Node modules

First, you need to install `yarn`. For more details visit [official guide](https://yarnpkg.com/en/docs/install).

Then go to the project directory and run the following commands:

```bash
$ yarn install
$ yarn dev
```

Visit `http://localhost:3000`

## Run tests

Execute the following command in project directory:

```bash
$ yarn test
$ yarn test:watch
$ yarn coverage
$ yarn lint
```

You should test the following things:

- Action Creators
- Reducers
- Middlewares
- Components
- Utils
- Libs
- Constants
- Hooks

## Run start

You should run this command before build the project:

```bash
$ yarn start
```

## Run build

Create a public directory:

```bash
$ yarn build
```

## Run docker compose

Create a local:

```bash
$ docker compose up
```