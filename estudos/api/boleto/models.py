from django.db import models
from uuid import uuid4
from django.forms import CharField, FloatField, IntegerField, DecimalField

# Create your models here.
# Boleto deve ter: id, nome e preço.

class Boleto (models.Model):
    id_boleto =  models.UUIDField(primary_key = True, default = uuid4, editable = True)
    nome_boleto = models.CharField(max_length = 255)
    # Esse é um valor qualquer só pra atribuir algo à valor_boleto
    
    valor_boleto = models.FloatField(null = 'true', blank = 'true')
    
    
    
    

