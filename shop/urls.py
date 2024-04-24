from django.urls import path
from shop import views

urlpatterns = [
    path('', views.main_page, name='main-page')
]
