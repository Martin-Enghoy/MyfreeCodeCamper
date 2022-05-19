from django.urls import path
from . import views

"""
    Values stored in the urlpatterns are used on the url bar on the browser itself.
    Example:
    http://127.0.0.1:8000/          <--- The first value below will take the user to "views.home" or our website's homepage.
    http://127.0.0.1:8000/home      <--- Subsequently, the /home on the end of the url redirects to the same html.
    http://127.0.0.1:8000/crop      <--- /crop will bring the user to the crop management page of the website.
    http://127.0.0.1:8000/signup    <--- For the user to signup, /signup will bring the user to the proper signup page of the website.
    
"""
urlpatterns = [
    path('', views.home, name="home"),
    path('home', views.home, name="home"),
    path('crop', views.crop, name="crop"),
    path('signup', views.signup, name="signup"),
    # path('login', views.login, name="login")
]