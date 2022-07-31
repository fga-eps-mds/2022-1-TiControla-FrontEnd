# from rest_framework import viewsets
from user_data import serializers
from user_data import models
from rest_framework import generics, status, permissions, views
from rest_framework.response import Response
from django.contrib.auth import get_user


# classe para mostrar/atualizar os dados do usuario, requer que o usuario esteja autenticado
class UserDataView(generics.RetrieveUpdateAPIView, generics.CreateAPIView):

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = serializers.UserDataSerializer

    def get_object(self):
        # check if the request username belongs to the user behind it
        if self.request.data['username'] != get_user(self.request).username:
            return Response(None, status=status.HTTP_403_FORBIDDEN)
        # assert 1 == 0, str(get_user(self.request).username)
        # returns the data that belongs to the user
        return models.UserData.objects.get(username=self.request.data['username'])

    def post_object(self):
        # check if the request username belongs to the user behind it
        assert 1 == 0, str(self.request.data['username']) + "@" + str(self.request.data)
        if self.request.data['username'] != get_user(self.request).username:
            return Response(None, status=status.HTTP_403_FORBIDDEN)
        # kwargs = {k: r[0] for k, r in request.data.items()}
        # assert 1 == 0, str(self.request.data)

        # creates user's data
        models.UserData.objects.post(**self.request.data)
        return Response(None, status=status.HTTP_202_ACCEPTED)

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
