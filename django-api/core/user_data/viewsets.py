# from rest_framework import viewsets
from user_data import serializers
from user_data import models
from rest_framework import generics


# class UserDataViewSet(viewsets.ModelViewSet):
#     serializer_class = serializers.UserSerializer
#     queryset = models.UserData.objects.all()

# classe para pegar os dados do usuario, requer que o usuario esteja autenticado
class UserDataView(generics.RetrieveAPIView):
    serializer_class = serializers.UserDataSerializer

    def get_object(self):
        if not self.request.user.is_authenticated:
            pass  # Do something for anonymous users.
            return self.request.user
        # Do something for logged-in users.
        return models.UserData.objects.get(username=self.request.user.username)
