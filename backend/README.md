# User Api

## How to run

#### shell mode
```sh
$ docker build -t rails_users .
$ docker run -it --rm --entrypoint=/bin/sh -p 3000:3000  -v $(pwd):/app  rails_users
$ rails s -b 0.0.0.0
```

#### run container

```sh
$ docker build -t rails_users .
$  docker run -p 3000:3000  rails_users
```