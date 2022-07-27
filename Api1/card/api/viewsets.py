from rest_framework import viewsets
from card.api import serializers
from card import models

class CardViewSet (viewsets.ModelViewSet):
    serializer_class = serializers.CardSerializer
    queryset = models.Card.objects.all()
