from django.urls import path, include
from youtube_clone import views

urlpatterns = [
    path('comment/', views.get_all_comments),
    path('reply/', views.get_all_replies),
    path('<int:pk>/', views.user_comments),
    path('<int:pk>/', views.user_replies),
]
