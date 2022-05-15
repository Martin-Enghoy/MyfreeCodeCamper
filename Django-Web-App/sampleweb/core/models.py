from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class userProfile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    id_user = models.IntegerField()
    bio = models.TextField(blank=True)
    profileimg = models.ImageField(upload_to='profile_images', default='default.jpg')

    def __str__(self):
        return self.user.username