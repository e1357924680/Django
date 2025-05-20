from django.test import TestCase
from django.urls import reverse
from .models import Article


class ArticleModelTest(TestCase):
    def test_create_article(self):
        article = Article.objects.create(
            title="Test Article", content="Sample content")
        self.assertEqual(article.title, "Test Article")


class ArticleAPITest(TestCase):
    def test_list_articles(self):
        Article.objects.create(title="A", content="Content A")
        Article.objects.create(title="B", content="Content B")
        url = reverse('article-list-create')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 2)
