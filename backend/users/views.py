from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from core.permissions import IsAdmin


class UserCreateView(generics.CreateAPIView):
    """
    Allows new users to register.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update, or delete a user.
    Only the user themselves or an admin can modify or delete.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdmin]
