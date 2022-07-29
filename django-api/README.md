
```
# instruções para criar o super user e levantar a API (acho que o rodrigo sabe usar)
cd 2022-1-TiControla/django-api

touch .env

docker-compose build

docker run -it --rm -p 8000:8000 django-api_api bash

python manage.py flush --no-input && python manage.py makemigrations user_data && python manage.py migrate

python manage.py createsuperuser --username root --email leonardomichalskim@gmail.com

python manage.py runserver 0.0.0.0:8000
```

```
a biblioteca que eu uso é "pip install httpie". mas tbm dá para usar postman, swagger, etc

# fazer login (salvar o sessionid para usar depois)
http POST :8000/login/ username=root password=pass

# mostrar dados do usuario logado (email, primeiro nome, ultimo nome, data de criação do usuário)
http GET :8000/profile/ Cookie:sessionid=fass5awxhmwihlf785pboklgcy5je2bb

# mostrar dados do usuario logado (limite maximo, limite disponivel, saldo)
http GET :8000/profile_data/ Cookie:sessionid=fass5awxhmwihlf785pboklgcy5je2bb

# TODO: criar/atualizar dados do usuario logado (email, primeiro nome, ultimo nome)
# TODO: criar/atualizar dados do usuario logado (limite maximo, limite disponivel, saldo)

# link útil para resolver os TODOs: https://www.django-rest-framework.org/api-guide/generic-views/



```
