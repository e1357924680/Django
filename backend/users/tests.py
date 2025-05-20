from django.test import TestCase
from django.contrib.auth.models import User


class UserModelTest(TestCase):
    def test_create_user(self):
        user = User.objects.create_user(
            username='testuser', password='testpass')
        self.assertEqual(user.username, 'testuser')
        self.assertFalse(user.is_staff)
