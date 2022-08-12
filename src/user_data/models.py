from django.db import models


class UserData(models.Model):
    # TODO: substituir username por email ou por id
    username = models.CharField(max_length=150, unique=True, primary_key=True)
    saldo = models.FloatField(default=0.0)
    limite_maximo = models.FloatField(default=0.0)
    limite_disponivel = models.FloatField(default=0.0)
    # limite_credito = models.FloatField(null='true', blank='true')

    # def __str__(self):
    #     return f"{self.email}"
