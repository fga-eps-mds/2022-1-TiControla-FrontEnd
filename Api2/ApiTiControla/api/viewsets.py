from rest_framework import viewsets
from ApiTiControla.api import serializers
from ApiTiControla import models

class ApiTiControlaViewSet (viewsets.ModelViewSet):
    serializer_class = serializers.ApiTiControlaSerializer
    queryset = models.ApiTiControla.objects.all()
