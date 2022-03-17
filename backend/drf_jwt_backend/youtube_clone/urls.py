from django.urls import path, include
from youtube_clone import views

urlpatterns = [
    path('', views.user_comments),
    # path('all/', views.get_all_comments),
    path('<int:pk>/', views.get_all_comments),
]
