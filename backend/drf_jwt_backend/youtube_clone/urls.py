from django.urls import path, include
from youtube_clone import views

urlpatterns = [
    path('comment/', views.get_all_comments),
    path('reply/', views.get_all_replies),
    path('new_comment/', views.user_comments),
    path('new_reply/', views.user_replies),
]
