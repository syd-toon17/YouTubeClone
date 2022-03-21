from django.urls import path, include
from youtube_clone import views

urlpatterns = [
    path('comment/<str:video_id>/', views.get_by_video_id),
    
    path('new_comment/<int:comment_id>/', views.user_comments),
    path('new_reply/<int:comment_id>/', views.user_replies),
    path('edit_comment/<int:comment_id>/', views.user_comments),
    path('comment_replies/<int:comment_id>/', views.comment_replies)
]
