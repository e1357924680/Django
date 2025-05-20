from django.urls import path
from .views import CommentListCreateView, CommentDetailView

urlpatterns = [
    path('<int:article_id>/', CommentListCreateView.as_view(), name='comment-list-create'),
    path('<int:pk>/detail/', CommentDetailView.as_view(), name='comment-detail'),
]
