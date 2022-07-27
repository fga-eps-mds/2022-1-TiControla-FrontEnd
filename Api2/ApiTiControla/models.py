from django.db import models
from uuid import uuid4
from django.forms import CharField, IntegerField, DecimalField

# USUÁRIO:
# id - string
# nome - string
# email - string
# senha - string
# celular - string 
# saldo - double 
# limite máximo (cc) - double
# limite disponível (cc) - double 

class ApiTiControla (models.Model):
    id_usuario =  models.UUIDField (primary_key = True, default = uuid4, editable = False)
    nome = models.CharField (max_length = 255)
    email = models.EmailField (max_length=255)
    senha = models.CharField (max_length=255)
    celular = models.CharField(max_length=12, default = 0)
    saldo = models.DecimalField (max_digits=20, decimal_places=2)
    limiteMax = models.DecimalField (max_digits=20, decimal_places=2)
    limiteDisp = models.DecimalField (max_digits=20, decimal_places=2)