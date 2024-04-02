from django.shortcuts import render
from rest_framework import viewsets
from .serializer import NoteSerializer
from .models import Note
# Create your views here.

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    