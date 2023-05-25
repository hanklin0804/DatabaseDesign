pip install --upgrade django==4.2.1
python -m django --version
django-admin startproject ubereats backend
cd backend
python manage.py startapp users
python manage.py startapp restaurants
python manage.py startapp orders
python manage.py startapp reviews

# 安裝mysql client
sudo apt-get install python3-dev default-libmysqlclient-dev -y
pip install mysqlclient

# 安裝cros套件
pip install django-cors-headers

# 餐廳可以上傳LOGO
pip install Pillow

# 安裝djangorestframework、filter
pip install djangorestframework
pip install django-filter



# 第一條指令會將您的模型變更生成遷移檔案，而第二條則將這些變更實際應用到資料庫中。
python manage.py makemigrations
python manage.py migrate

