from rest_framework import serializers
from .models import Comment, Reply

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id','user', 'video_id', 'text', 'likes', 'dislikes']
        depth = 1
        
class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        exclude =('Comment')
        fields =['id', 'user','comment', 'text']
        depth = 1