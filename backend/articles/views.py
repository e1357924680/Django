from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Q
from .models import Article
from .serializers import ArticleSerializer
from core.permissions import IsAdmin 


class ArticleDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsAdmin]


class ArticleListCreateView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticatedOrReadOnly, IsAdmin]

    def get_queryset(self):
        queryset = Article.objects.all().order_by('-created_at')
        search_term = self.request.query_params.get('search')
        if search_term:
            queryset = queryset.filter(
                Q(title__icontains=search_term) |
                Q(content__icontains=search_term) |
                Q(tags__name__icontains=search_term) |      
                Q(author__username__icontains=search_term)  
            ).distinct()
        return queryset
    def perform_create(self, serializer):
        if not self.request.user.is_staff:
            raise PermissionDenied("Only admin users can create articles.")
        serializer.save(author=self.request.user)
