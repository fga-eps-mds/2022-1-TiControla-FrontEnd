# from rest_framework import viewsets
# from user import serializers
# from user import models


# class UserViewSet(viewsets.ModelViewSet):
#     serializer_class = serializers.UserSerializer
#     queryset = models.User.objects.all()

from django.contrib.auth import login, logout, get_user_model

from rest_framework import generics
from rest_framework import permissions
from rest_framework import status
from rest_framework import views
from rest_framework.response import Response

from user import serializers


class LoginView(views.APIView):
    # This view should be accessible also for unauthenticated users.
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = serializers.LoginSerializer(data=request.data, context={ 'request': request })
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        return Response(None, status=status.HTTP_202_ACCEPTED)


class LogoutView(views.APIView):

    def post(self, request, format=None):
        logout(request)
        return Response(None, status=status.HTTP_204_NO_CONTENT)


# classe para pegar os dados do usuario, requer que o usuario esteja autenticado
class ProfileView(generics.RetrieveAPIView):
    serializer_class = serializers.UserSerializer

    def get_object(self):
        return self.request.user


# TODO: averiguar (e talvez aumentar) a segurança desta view
class RegisterView(views.APIView):
    # This view should be accessible also for unauthenticated users.
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        get_user_model().objects.create_user(**request.data)
        return Response(None, status=status.HTTP_202_ACCEPTED)
