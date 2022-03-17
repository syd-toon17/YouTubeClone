from django.urls import path, include
from youtube_clone import views

urlpatterns = [
    path('', views.get_all_comments),
    path('<int:pk>/', views.user_comments),
]
