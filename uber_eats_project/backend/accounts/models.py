from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models

# 自定義用戶管理器類，繼承自 Django 的 BaseUserManager
class CustomUserManager(BaseUserManager):
    def create_user(self, email=None, password=None, **extra_fields):
        # 创建普通用户的函数，接受用户名，电子邮件和密码参数，还可以接受其他参数作为关键字参数
        # extra_fields用于存储其他用户信息，例如电话号码等
        # 默认情况下，新用户不是管理员或超级用户
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        # 如果未提供電子郵件，則引發異常
        if not email:
            raise ValueError('電子郵件必須填寫')
        # 正規化電子郵件地址
        email = self.normalize_email(email)
        # 將電子郵件的值賦給 username
        username = email
        # 創建用戶對象
        user = self.model(username=username, email=email, **extra_fields)
        # 設置用戶密碼
        user.set_password(password)
        # 將用戶對象保存到數據庫
        user.save(using=self._db)
        return user

    def create_superuser(self, email=None, password=None, **extra_fields):
        # 設置超級用戶的 is_staff 和 is_superuser 屬性為 True
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('超級用戶必須將 is_staff 設置為 True。')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('超級用戶必須將 is_superuser 設置為 True。')

        # 調用 create_user 方法創建超級用戶
        return self.create_user(email, password, **extra_fields)

# 自定義 User 模型，繼承自 Django 的 AbstractUser
class User(AbstractUser):
    # 新增一個 phone_number 屬性，用於存儲用戶的電話號碼
    phone_number = models.CharField(max_length=15)
    # 添加自定義用戶管理器
    objects = CustomUserManager()

    # 定義 __str__ 方法，返回用戶名作為此模型的字符串表示
    def __str__(self):
        return self.username
