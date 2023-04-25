# 安装Node.js和npm:
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# 验证Node.js和npm是否正确安装
node -v
npm -v

# 使用pipenv创建Django项目
pipenv shell 
pip install django djangorestframework djangorestframework-simplejwt
django-admin startproject backend

#創建 users app
python manage.py startapp users


# 設定Django 文件
# Django setting檔案
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'uber_eats',
        'USER': 'hanklin',
        'PASSWORD': 'mitlab',
        'HOST': '127.0.0.1',  # 这里应该是你的 MySQL 服务器地址，例如 'localhost' 或 '127.0.0.1'
        'PORT': '3306',
    }
}
AUTH_USER_MODEL = 'myapp.User'

#創建數據庫遷移並遷移數據庫：
python manage.py makemigrations
python manage.py migrate



# 创建React应用程序:
sudo npm install -g create-react-app
create-react-app frontend
npm install react-router-dom axios
# 強制所有套件都升到最新版
npm install --force 
# 強制修復高風險問題
npm audit fix --force


# 安装和配置Docker和Docker Compose:
cd uber_eats_backend
touch Dockerfile
