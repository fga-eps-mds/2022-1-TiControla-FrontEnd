# from rest_framework import viewsets
from user_data import serializers
from user_data import models
from rest_framework import generics, status
from django.contrib.auth import get_user


# classe para pegar os dados do usuario, requer que o usuario esteja autenticado
class UserDataView(generics.RetrieveAPIView):
    serializer_class = serializers.UserDataSerializer

    def get_object(self):
        # check if user is authenticated
        if (not self.request.user.is_authenticated) or (not get_user(self.request).is_authenticated):
            return Response(None, status=status.HTTP_403_FORBIDDEN)
        # check if the request username belongs to the user behind it
        if self.request.user.username != get_user(self.request).username:
            return Response(None, status=status.HTTP_403_FORBIDDEN)
        # returns the data that belongs to the user
        return models.UserData.objects.get(username=self.request.user.username)
