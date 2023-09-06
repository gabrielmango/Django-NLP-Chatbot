from django.urls import path
from . import views

urlpatterns = [
    path('conversa/', views.chatbot, name='chatbot'),
]