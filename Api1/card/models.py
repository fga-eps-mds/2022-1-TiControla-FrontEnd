from django.db import models
from uuid import uuid4
from django.forms import CharField, IntegerField, DecimalField

# id - string
# código - number/int
# tipo - string (credito ou debito)
# apelido cartão - string
# data - date
# categoria - string (mercado, pessoal, lazer, carro..)
# descrição - string
# valor - number/double

class Card (models.Model):
    id_card =  models.UUIDField (primary_key = True, default = uuid4, editable = False)
    codigo = models.IntegerField (blank=True, null=True)
    tipo = models.CharField (max_length=255)
    apelido = models.CharField (max_length=255)
    data = models.DateField(max_length=12, default = 0)
    categoria = models.CharField (max_length=255)
    descricao = models.CharField (max_length=255)
    valor = models.DecimalField (max_digits=20, decimal_places=2)