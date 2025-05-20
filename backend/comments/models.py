from django.db import models
from django.contrib.auth.models import User
from articles.models import Article


class Comment(models.Model):
    article = models.ForeignKey(
        Article, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"Comment({self.id}) on {self.article.title}"
