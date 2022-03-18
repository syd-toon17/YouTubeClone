from django.urls import path, include
from youtube_clone import views

urlpatterns = [
    path('comment/', views.get_all_comments),
    path('reply/', views.get_all_replies),
    path('new_comment/', views.user_comments),
    path('new_reply/<int:comment_id>/', views.user_replies),
    path('edit_comment/<int:comment_id>/', views.user_comments),
    path('comment_replies/<int:comment_id>/', views.comment_replies)
]
