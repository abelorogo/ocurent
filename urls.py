from django.urls import path
from . import views  # Import views module

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact_view, name='contact'),  # Fix: Change to views.contact_view
    path('collection/', views.collection, name='collection'),
    path('shop/', views.shop, name='shop'),
]
