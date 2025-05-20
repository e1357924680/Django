from rest_framework import serializers
from .models import Article, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']


class ArticleSerializer(serializers.ModelSerializer):
    author_id = serializers.ReadOnlyField(source='author.id')
    categories = serializers.StringRelatedField(many=True) 

    class Meta:
        model = Article
        fields = ['id', 'title', 'content', 'created_at', 'updated_at', 'author_id', 'categories']
        read_only_fields = ['created_at', 'updated_at', 'author_id']