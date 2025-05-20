from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    author_id = serializers.ReadOnlyField(source='author.id')
    author_username = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = Comment
        fields = ['id', 'article', 'content', 'created_at', 'author_id', 'author_username']
        read_only_fields = ['id', 'created_at', 'author_id', 'article']