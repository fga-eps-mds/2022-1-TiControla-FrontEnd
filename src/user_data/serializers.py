from rest_framework import serializers
from user_data import models


class UserDataSerializer(serializers.ModelSerializer):

   class Meta:
       model = models.UserData
       fields = [
           'username',  # ou email
           'saldo',
           'limite_maximo',
           'limite_disponivel',
       ]
