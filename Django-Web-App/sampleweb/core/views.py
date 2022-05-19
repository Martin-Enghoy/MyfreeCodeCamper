# import email <- What's this?
from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.http import HttpResponse
from .models import userProfile

# Create your views here.
def home(request):
    # return HttpResponse('<h1>Welcome to Home Grown Hydroponics Web App!</h1>')
    return render(request, 'homepage.html') 

def crop(request):
    return render(request, 'crop.html')

def signup(request):

    if request.method == 'POST':
        email = request.POST['email']
        username = request.POST['username']
        password = request.POST['password']
        confirm = request.POST['confirm']

        if password == confirm:
            if User.objects.filter(email=email).exists():
                messages.info(request, 'Email is already taken.')
                return redirect('signup')
            elif User.objects.filter(username=username).exists():
                messages.info(request, 'Username is already taken.')
                return redirect('signup')
            else:
                user = User.object.create_user(email=email, username=username, password=password)
                user.save()

                #User Login and Redirect to Settings Page

                #Create a Profile Object for the new user
                user_model = User.objects.get(username=username)
                new_profile = userProfile.objects.create(user=user_model, id_user=user_model.id)
                new_profile.save()
                return redirect('signup')

        else:
            messages.info(request, 'Password does not match.')
            return redirect('signup')
            
    else:
        return render(request, 'signup.html')

    # def login(request):
        
    #     if request.method == 'POST':
    #         if passw