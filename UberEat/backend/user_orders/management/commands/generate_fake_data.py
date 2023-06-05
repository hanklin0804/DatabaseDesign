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

        users = User.objects.all()
        for _ in range(5):  # Creating 5 Faker restaurants
            restaurant = Restaurant.objects.create(
                user=fake.random_element(elements=users),
                name=fake.company(),
                description=fake.text(),
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

        restaurants = Restaurant.objects.all()

        for user in users:
            for _ in range(2):  # Creating 2 orders for each user
                restaurant = fake.random_element(elements=restaurants)
                delivery_time_minutes = randint(1, 60)  # 1 to 60 minutes
                order = Order.objects.create(
                    user=user,
                    restaurant=restaurant,
                    order_time=timezone.now().timestamp(),  # convert current time to timestamp
                    delivery_time=delivery_time_minutes*60,  # convert minutes to seconds
                    delivery_address=fake.address(),
                    total_price=0,
                    # assuming status can be one of these four
                    status=fake.random_element(
                        elements=["Preparing", "Cooking", "Delivering", "Delivered"]),
                    finished=fake.boolean(),  # randomly determine if order is finished
                    # assuming these are the possible payment methods
                    payment_method=fake.random_element(
                        elements=["Credit Card", "Debit Card", "Cash", "Online Payment"])
                )

                menu_items = Menu.objects.filter(restaurant=restaurant)
                total_price = 0
                for _ in range(randint(1, 3)):  # Adding 1-3 order items for each order
                    item = fake.random_element(elements=menu_items)
                    quantity = randint(1, 3)
                    OrderItem.objects.create(
                        order=order,
                        item=item,
                        quantity=quantity
                    )
                    total_price += item.price * quantity

                order.total_price = Decimal(
                    total_price).quantize(Decimal("0.00"))
                order.save()

            for _ in range(2):  # Adding 2 reviews for each user
                Review.objects.create(
                    user=user,
                    restaurant=fake.random_element(elements=restaurants),
                    rating=randint(1, 5),
                    review=fake.text()
                )
