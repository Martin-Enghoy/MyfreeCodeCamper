from django.urls import path
from . import views


urlpatterns = [
    path('home', views.home, name="home"),
    path('crop', views.crop, name="crop"),
    path('signup', views.signup, name="signup"),
]