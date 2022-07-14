from rest_framework import viewsets
from boleto.api import serializers
from boleto import models

class BoletoViewSet (viewsets.ModelViewSet):
    serializer_class = serializers.BoletoSerializer
    queryset = models.Boleto.objects.all()
