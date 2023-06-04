from django.core.management.base import BaseCommand
from faker import Faker
from django.utils import timezone
from decimal import Decimal
from random import randint, uniform

from orders.models import Order, OrderItem
from restaurants.models import Restaurant, Menu
from users.models import User
from reviews.models import Review


class Command(BaseCommand):
    help = 'Creates fake data for the application'
    print()

    def handle(self, *args, **options):
        fake = Faker()

        for _ in range(10):  # Creating 10 Faker users
            User.objects.create(
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                email=fake.email(),
                password=fake.password(),
                phone_number=fake.phone_number(),
                delivery_address=fake.address()
            )

        for _ in range(5):  # Creating 5 Faker restaurants
            restaurant = Restaurant.objects.create(
                name=fake.company(),
                description=fake.text(),  # This will be null as we can't generate an image
                address=fake.address(),
                phone_number=fake.phone_number(),
                rating=Decimal(uniform(1, 5)).quantize(Decimal("0.00"))
            )

            for _ in range(10):  # Creating 10 menu items for each restaurant
                Menu.objects.create(
                    restaurant=restaurant,
                    name=fake.catch_phrase(),
                    description=fake.text(),
                    price=Decimal(uniform(5, 50)).quantize(Decimal("0.00"))
                )

        users = User.objects.all()
        restaurants = Restaurant.objects.all()

        for user in users:
            for _ in range(2):  # Creating 2 orders for each user
                restaurant = fake.random_element(elements=restaurants)
                delivery_time = fake.date_time_between(
                    start_date='now', end_date='+1h', tzinfo=timezone.get_current_timezone())
                order = Order.objects.create(
                    user=user,
                    restaurant=restaurant,
                    delivery_time=delivery_time,
                    delivery_address=fake.address(),
                    total_price=Decimal(
                        uniform(10, 100)).quantize(Decimal("0.00"))
                )

                menu_items = Menu.objects.filter(restaurant=restaurant)
                for _ in range(randint(1, 3)):  # Adding 1-3 order items for each order
                    OrderItem.objects.create(
                        order=order,
                        item=fake.random_element(elements=menu_items),
                        quantity=randint(1, 3)
                    )

            for _ in range(2):  # Adding 2 reviews for each user
                Review.objects.create(
                    user=user,
                    restaurant=fake.random_element(elements=restaurants),
                    rating=randint(1, 5),
                    review=fake.text()
                )
