from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.shortcuts import get_object_or_404
from .models import Comment
from rest_framework import generics
from .serializers import CommentSerializer
from articles.models import Article
from core.permissions import IsCommentOwnerOrAdmin

class CommentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsCommentOwnerOrAdmin]


class CommentListCreateView(APIView):
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get(self, request, article_id):
        article = get_object_or_404(Article, pk=article_id)
        comments = article.comments.all().order_by('-created_at')
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

    def post(self, request, article_id):
        article = get_object_or_404(Article, pk=article_id)
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(article=article, author=request.user if request.user.is_authenticated else None)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
