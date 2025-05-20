from django.test import TestCase
from django.contrib.auth.models import User
from articles.models import Article
from .models import Comment


class CommentModelTest(TestCase):
    def test_create_comment(self):
        user = User.objects.create_user(
            username='testuser', password='testpass')
        article = Article.objects.create(
            title="Test Article", content="Sample content")
        comment = Comment.objects.create(
            article=article, content="Great article!", author=user)
        self.assertEqual(comment.article, article)
