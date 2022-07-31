# from rest_framework import viewsets
from user_data import serializers
from user_data import models
from rest_framework import generics, status, permissions, views
from rest_framework.response import Response
from django.contrib.auth import get_user


# classe para criar os dados do usuario, requer que o usuario esteja autenticado
class CreateUserDataView(generics.CreateAPIView):
    
    # TODO: consertar erro de csrf no httpie para só permitir que usuários autenticados tenham acesso a esta view
    # permission_classes = (permissions.IsAuthenticated)
    permission_classes = ()
    authentication_classes = ()
    serializer_class = serializers.UserDataSerializer

    def post_object(self):
        # check if the request username belongs to the user behind it
        if self.request.data['username'] != get_user(self.request).username:
            return Response(None, status=status.HTTP_403_FORBIDDEN)
        # creates user's data
        models.UserData.objects.post(**request.data)
        return Response(None, status=status.HTTP_202_ACCEPTED)


# classe para mostrar/atualizar os dados do usuario, requer que o usuario esteja autenticado
class UserDataView(generics.RetrieveUpdateAPIView):

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.UserDataSerializer

    def get_object(self):
        # check if the request username belongs to the user behind it
        if self.request.data['username'] != get_user(self.request).username:
            return Response(None, status=status.HTTP_403_FORBIDDEN)
        # assert 1 == 0, str(get_user(self.request).username)
        # returns the data that belongs to the user
        return models.UserData.objects.get(username=self.request.data['username'])

    def put_object(self):
        # check if the request username belongs to the user behind it
        if self.request.data['username'] != get_user(self.request).username:
            return Response(None, status=status.HTTP_403_FORBIDDEN)
        models.UserData.objects.put(**self.request.data)
        return Response(None, status=status.HTTP_202_ACCEPTED)

    def patch_object(self):
        # check if the request username belongs to the user behind it
        if self.request.data['username'] != get_user(self.request).username:
            return Response(None, status=status.HTTP_403_FORBIDDEN)
        # updates the user's data
        models.UserData.objects.get(username=self.request.data['username']).patch(**self.request.data)
        return Response(None, status=status.HTTP_202_ACCEPTED)
