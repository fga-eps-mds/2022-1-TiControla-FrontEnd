## Como levantar a API

```
# esteja na pasta "2022-1-TiControla/django-api"
cd 2022-1-TiControla/django-api

# crie um arquivo vazio de nome ".env"
touch .env

# rode o container
docker-compose up --build
```

## Como fazer requisições HTTP para a API usando httpie
A biblioteca httpie não é necessária. Fique à vontade para usar a ferramenta de sua preferência (como postman ou swagger).
```
# instale a biblioteca
pip install httpie

# fazer login (é necessário salvar o sessionid para usar depois)
http POST :8000/login/ username=root password=pass

# mostrar dados do usuario logado (email, primeiro nome, ultimo nome, data de criação do usuário)
http GET :8000/profile/ Cookie:sessionid=q2qkjpgsjhwqzjmlu6irtypq7clbw63r

# mostrar dados do usuário logado relacionados a finanças (username, saldo, limite_maximo, limite_disponivel)
http GET :8000/profile/data/ Cookie:sessionid=q2qkjpgsjhwqzjmlu6irtypq7clbw63r username=root
```
