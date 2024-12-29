from django.shortcuts import render
from rest_framework import viewsets
from .models import User, Summary
from .serializers import UserSerializer, SummarySerializer

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SummaryViewSet(viewsets.ModelViewSet):
    queryset = Summary.objects.all()
    serializer_class = SummarySerializer
