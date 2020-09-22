#node-auth

##curl

```sh
curl -v localhost:3000/register -H 'Content-Type: application/json' \
-d '{"name": "daniel", "email": "danielkao@gmail.com", "password": "Daniel123", "passwordConfirmation":"Daniel123"}'

curl -v localhost:3000/register -H 'Content-Type: application/json' \
--cookie 'sid=s%3Aa8W7ZHg125f3WD1u_eHBT0-iJkag1fbV.0Amlgyfjo39yaMapViTp%2BAP%2BKl0vtpgZoDvyi4J5uWw'

curl -v -X POST localhost:3000/login -H 'Content-Type: application/json' -d '{"email":"danielkao@gmail.com", "password":"Daniel123"}'

curl -v -X POST localhost:3000/logout

curl -v localhost:3000/home

```

##docker

```sh
docker exec -it node_auth_db_1 mongo -u admin -p secret auth

docker exec -it node_auth_cache_1 redis-cli -a secret
```
