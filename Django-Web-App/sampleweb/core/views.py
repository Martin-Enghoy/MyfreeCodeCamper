# import email <- What's this?
from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from .models import userProfile

# Create your views here.
@login_required(login_url='login')
def home(request):
    # return HttpResponse('<h1>Welcome to Home Grown Hydroponics Web App!</h1>')
    return render(request, 'home.html') 

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
                user = User.objects.create_user(email=email, username=username, password=password)
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

def login(request):
    
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = auth.authenticate(username=username, password=password)

        # If the user is found in the database (not None)
        if user is not None:
            auth.login(request, user)
            return redirect('/')        # Takes the user to the home page or ('') blank in urls
        else:
            messages.info(request, 'User does not exist / Incorrect Input')
            return redirect('login')

    else:
        return render(request,'login.html')

@login_required(login_url='login')
def logout(request):
    auth.logout(request)
    return redirect('login')