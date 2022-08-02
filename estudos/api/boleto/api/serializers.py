from rest_framework import serializers
from boleto import models

class BoletoSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.Boleto
        fields = '__all__' 