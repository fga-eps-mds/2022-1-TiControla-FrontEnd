from rest_framework import serializers
from card import models

class CardSerializer (serializers.ModelSerializer):
    class Meta:
        model = models.Card
        fields = '__all__' 