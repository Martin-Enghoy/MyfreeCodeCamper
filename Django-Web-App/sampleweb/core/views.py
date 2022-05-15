from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    # return HttpResponse('<h1>Welcome to Home Grown Hydroponics Web App!</h1>')
    return render(request, 'homepage.html') 

def crop(request):
    return render(request, 'crop.html')

def signup(request):
    return render(request, 'signup.html')