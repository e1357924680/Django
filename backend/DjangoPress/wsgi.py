import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DjangoPress.settings', 'DjangoPress.settings')
application = get_wsgi_application()
