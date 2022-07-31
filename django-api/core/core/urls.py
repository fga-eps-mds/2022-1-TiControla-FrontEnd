"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
# from user.viewsets import UserViewSet
from user import viewsets as user_viewsets
from user_data import viewsets as user_data_viewsets


# route = routers.DefaultRouter()

# route.register(r'user', UserViewSet, basename="user")

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include(route.urls))
    path('register/', user_viewsets.RegisterView.as_view()),  # sign up
    path('login/', user_viewsets.LoginView.as_view()),
    path('profile/', user_viewsets.ProfileView.as_view()),
    path('profile_data/', user_data_viewsets.UserDataView.as_view()),
]
