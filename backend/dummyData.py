from django.contrib.auth.models import User
from articles.models import Article
from comments.models import Comment

# Optionally clear existing sample data (uncomment if needed)
User.objects.all().delete()
Article.objects.all().delete()
Comment.objects.all().delete()

# Create admin user (if not exists)
admin_user, created = User.objects.get_or_create(
    username='admin',
    defaults={'email': 'admin@example.com'}
)
if created:
    admin_user.set_password('admin')
    admin_user.is_staff = True
    admin_user.is_superuser = True
    admin_user.save()

# Create 4 regular users
john, created = User.objects.get_or_create(
    username='john_doe', 
    defaults={'email': 'john@example.com'}
)
if created:
    john.set_password('Password123')
    john.save()

jane, created = User.objects.get_or_create(
    username='jane_smith', 
    defaults={'email': 'jane@example.com'}
)
if created:
    jane.set_password('Password123')
    jane.save()

mike, created = User.objects.get_or_create(
    username='mike_brown', 
    defaults={'email': 'mike@example.com'}
)
if created:
    mike.set_password('Password123')
    mike.save()

lisa, created = User.objects.get_or_create(
    username='lisa_white', 
    defaults={'email': 'lisa@example.com'}
)
if created:
    lisa.set_password('Password123')
    lisa.save()

# Create 5 articles (all authored by the admin user)
article1 = Article.objects.create(
    title="Exploring Django 5 New Features",
    content="Django 5 brings many improvements, including asynchronous views and enhanced ORM performance. This article covers these exciting changes.",
    author=admin_user
)

article2 = Article.objects.create(
    title="The Future of Web Development",
    content="Modern web development is evolving rapidly. This article explores emerging trends and future directions in the industry.",
    author=admin_user
)

article3 = Article.objects.create(
    title="Understanding RESTful APIs",
    content="A detailed guide to designing and implementing robust RESTful APIs using Django REST Framework.",
    author=admin_user
)

article4 = Article.objects.create(
    title="Advancements in Machine Learning",
    content="Machine learning is transforming industries. Learn about the latest advancements and their applications in this comprehensive article.",
    author=admin_user
)

article5 = Article.objects.create(
    title="Top 10 Programming Languages in 2025",
    content="Looking ahead, this article lists the top programming languages predicted to shape the future of technology.",
    author=admin_user
)

# Create 5 comments on various articles (by regular users)
Comment.objects.create(
    article=article1,
    content="This article provides a clear overview of Django 5 features!",
    author=jane
)
Comment.objects.create(
    article=article2,
    content="Really interesting insights into the future of web trends.",
    author=mike
)
Comment.objects.create(
    article=article3,
    content="The explanation of RESTful APIs was very helpful.",
    author=lisa
)
Comment.objects.create(
    article=article4,
    content="Machine learning is truly transformative. Great read!",
    author=john
)
Comment.objects.create(
    article=article5,
    content="2025 looks exciting for programming!",
    author=jane
)

print("Sample data created successfully!")
