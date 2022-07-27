from rest_framework import serializers
from ApiTiControla import models

class ApiTiControlaSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.ApiTiControla
        fields = '__all__' 