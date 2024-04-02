from django.db import models

# Create your models here.

class Note(models.Model):
    title = models.TextField()
    description = models.TextField()
    creation_date = models.DateField(auto_now_add=True)
    