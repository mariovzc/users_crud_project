# User Api

## How to run

#### shell mode
```sh
$ docker build -t front_users .
$ docker run -it --rm --entrypoint=/bin/sh -p 3001:3000  -v $(pwd):/app  front_users
$ yarn start
```

#### run container

```sh
$ docker build -t front_users .
$  docker run -p 3001:3000  front_users
```