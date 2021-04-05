# User Project

## How to run

#### shell mode
NOTE: 
 - You must install yarn (front project) packages outside of container
 - You must run rails db:migrate before execute the compose.
 - In Docker-Compose you should uncomment extra_hosts and add your ip (if not macOS )

Run:
```sh
$ docker-compose up --build
```

Then you can use the proxy:
- `PORT:3002 /api/xxxx for rails api ( you dont need to use /api in your services resource)`
- `PORT:3002 /xxxx for front project`


### API DOCS
Note: if you use proxy need add prefix /api and use port 3002
- `GET`  `/users`  return a list of created users
   ```json
     [
      {
        "id": 1,
        "full_name": "Mario Vizcaino",
        "gender": "male",
        "birth_date": "1990-12-19",
        "image_url": "url"
      },
     ]
   ```
  
- `POST`  `/users`  create a new User (required fields: full_name, gender, birth_date)
  body:
   ```json
     {
      "user": {
        "full_name": "Mario Vizcaino",
        "gender": "male",
        "birth_date": "1990-12-19",
        "image_url": "url"
      },
     }
   ```
   response:
   ```json
     {
      "id": "1",
      "resource": "/users/1"
     }
   ```

- `GET`  `/users/:id`  return single user item
   ```json
      {
        "id": 1,
        "full_name": "Mario Vizcaino",
        "gender": "male",
        "birth_date": "1990-12-19",
        "image_url": "url"
      }
   ```