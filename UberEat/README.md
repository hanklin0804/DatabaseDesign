- # Database Final Project - Food Dasher

  Food Dasher is a database design final project focused on food ordering and delivery operations. It showcases a comprehensive database system with entities such as restaurants, menus, customers, orders, and delivery drivers. The project incorporates efficient data models, relationships, and data integrity constraints. With features like menu management, order placement, and delivery tracking, Food Dasher demonstrates our expertise in designing a scalable and secure database system for a seamless food delivery experience.

- ## Goal

  The main goal of Food Dasher is to provide a user-friendly platform for customers to easily order food from various restaurants and track the delivery status. Additionally, it aims to streamline restaurant operations by offering menu management tools and efficient order processing capabilities. The project aims to demonstrate the effective use of database design principles to enhance the overall food ordering and delivery experience.

- ## Developer

  - Antony Wang
  - Hank Lin

- ## System Architeture

  - Backend Framework
    - Django
  - Database
    - MySQL

- ## How to run the project ?

  - ### Step 0. Install python library and node module

    ```bash=
    # requirement installation
    # Path : DatabaseDesign/UberEat/backend

    pip install -r requirements.txt
    ```

    ```bash=
    # node module installation
    # Path : DatabaseDesign/UberEat/frontend

    npm install
    ```

  - ### Step 1. Setting .env

    ```bash=
    # Backend setting
    # Path : DatabaseDesign/UberEat/backend/

    # Backend env setting
    cp .env.sample .env
    vi .env

    Change required: DB_PASSWORD,DB_HOST
    !!! DB_PASSWORD(.env) must same as MYSQL_PASSWORD(docker-compose.yml)!!!
    ```

    ```bash=
    # Frontend setting
    # Path : DatabaseDesign/UberEat/frontend/

    # Frontend env setting
    cp .env.sample .env
    vi .env
    ```

  - ### Step 2. Run Docker-Compose

    ```bash=
    # Path : DatabaseDesign/UberEat/backend/

    docker-compose build
    docker-compose up
    ```

- ## Q&A

  - Q: `docker compose` command not found

    - A: `sudo apt install docker-compose` to install docker compose

  - Q: `pip install` failed when `docker compose build`
    - A: `sudo apt update` and `sudo apt-get install python3-dev default-libmysqlclient-dev build-essential python3.8-dev python3.8-distutils libpython3.8-dev libpq-dev` to install the essential lib
