import os
from pathlib import Path
from dotenv import load_dotenv

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Load .env file
load_dotenv()
ENV_DEBUG = os.getenv("DEBUG")
ENV_ALLOWED_HOSTS = os.getenv("ALLOWED_HOSTS")

ENV_DB_ENGINE = os.getenv("DB_ENGINE")
ENV_DB_NAME = os.getenv("DB_NAME")
ENV_DB_USER = os.getenv("DB_USER")
ENV_DB_PASSWORD = os.getenv("DB_PASSWORD")
ENV_DB_HOST = os.getenv("DB_HOST")
ENV_DB_PORT = os.getenv("DB_PORT")

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-3g&s5g35=#eq7jm_9$0vm)iybw9i++p(k)jn+@suc#@g#3_^av'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = ENV_DEBUG

ALLOWED_HOSTS = [ENV_ALLOWED_HOSTS]

MEDIA_URL = '/logos/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'logos')


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
    'django_filters',
    'orders',
    'restaurants',
    'reviews',
    'users',
    'user_orders'
]

# filter
REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend']
}

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'ubereats.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'ubereats.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': ENV_DB_ENGINE,
        'NAME': ENV_DB_NAME,
        'USER': ENV_DB_USER,
        'PASSWORD': ENV_DB_PASSWORD,
        'HOST': ENV_DB_HOST,
        'PORT': ENV_DB_PORT,
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_ALLOW_ALL = True
