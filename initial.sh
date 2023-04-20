# 安装Node.js和npm:
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# 验证Node.js和npm是否正确安装
node -v
npm -v

# 使用pipenv创建Django项目
pipenv shell 
pip install django
django-admin startproject uber_eats_backend .
pip install djangorestframework



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
