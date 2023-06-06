- # Database Final Project - Food Dasher

  Food Dasher is a database design final project focused on food ordering and delivery operations. It showcases a comprehensive database system with entities such as restaurants, menus, customers, orders, and delivery drivers. The project incorporates efficient data models, relationships, and data integrity constraints. With features like menu management, order placement, and delivery tracking, Food Dasher demonstrates our expertise in designing a scalable and secure database system for a seamless food delivery experience.

- ## Goal

  The main goal of Food Dasher is to provide a user-friendly platform for customers to easily order food from various restaurants and track the delivery status. Additionally, it aims to streamline restaurant operations by offering menu management tools and efficient order processing capabilities. The project aims to demonstrate the effective use of database design principles to enhance the overall food ordering and delivery experience.

- ## Developer

  - Backend Development
    - Antony Wang
  - Frontend Development
    - Hank Lin

- ## System Architeture

  - Frontend Framework
    - React
  - Backend Framework
    - Django
  - Database
    - MySQL
  - Develop Enviroment
    - VM: GCP VM(4C/16G/80GB)
    - OS: Ubuntu 22.04
    - Backend: Python 3.10.6
    - Frontend: Node 14.21.3

- ## How to run the project ?

  - ### Step 0. Install python library and node module

    ```bash=
    # requirement installation
    # Path : Food_Dasher/backend/
    pip install -r requirements.txt
    ```

    ```bash=
    # node module installation
    # Path : Food_Dasher/frontend/
    npm install
    ```

  - ### Step 1. Setting .env

    ```bash=
    # Backend setting
    # Path : Food_Dasher/backend/
    cp .env.sample .env
    vi .env

    Change required: DB_PASSWORD,DB_HOST
    !!! DB_PASSWORD(.env) must same as MYSQL_PASSWORD(docker-compose.yml)!!!
    ```

    ```bash=
    # Frontend setting
    # Path : Food_Dasher/frontend/
    cp .env.sample .env
    vi .env

    Change required: REACT_APP_HOST_IP、REACT_APP_API_PORT
    ```

  - ### Step 2. Run Docker Compose (DB、phpMyAdmin)

    ```bash=
    # Path : Food_Dasher/backend/
    docker-compose build
    docker-compose up
    ```

  - ### Step 3. Run Migration

    ```bash=
    # Path : Food_Dasher/backend/
    python3 manage.py makemigrations
    python3 manage.py migrate
    ```

  - ### Step 4. Run Backend and Frontend

    ```bash=
    # Path : Food_Dasher/backend/
    python3 manage.py runserver 0.0.0.0:<backend port>

    # Path : Food_Dasher/frontend/
    npm start
    ```

- ## Impelementation

  - ### Part A. Member
    - #### Member - Register
      ![](https://hackmd.io/_uploads/Sksj0Y2U2.png)
    - #### Member - Login
      ![](https://hackmd.io/_uploads/H1_Eyc2Uh.png)
    - #### Member - Role Selection
      ![](https://hackmd.io/_uploads/ByCUZqnLh.jpg)
  - ### Part B. User
    - #### User - Restaurant Lobby
      ![](https://hackmd.io/_uploads/BkmOZ538n.png)
    - #### User - Restaurant Menu
      ![](https://hackmd.io/_uploads/H1Q2bc3In.png)
    - #### User - Order Cart
      ![](https://hackmd.io/_uploads/HkzkG53Lh.png)
    - #### User - Order Checkout
      ![](https://hackmd.io/_uploads/HJEzM9hLn.png)
    - #### User - Order Confirmation
      ![](https://hackmd.io/_uploads/ryFEMqnI2.png)
    - #### User - Order Status
      ![](https://hackmd.io/_uploads/SymdzqhL3.png)
    - #### User - History Order
      ![](https://hackmd.io/_uploads/Hk2tzcn8n.png)
    - #### User - Order Compelete
      ![](https://hackmd.io/_uploads/ryZnGc3U3.png)
    - #### User - Review and Rating
      ![](https://hackmd.io/_uploads/HkTCz9hUn.png)
    - #### User - Review and Rating Overview
      ![](https://hackmd.io/_uploads/Hy7FQcnIh.png)
  - ### Part C. Restaurant
    - Restaurant - Order
      ![](https://hackmd.io/_uploads/HkVMI5h82.png)
    - Restaurant - Information
      ![](https://hackmd.io/_uploads/ryZ8L5nL2.png)
    - Restaurant - Menu
      ![](https://hackmd.io/_uploads/rJTKUcnI3.png)

- ## Q&A

  - Q: `docker compose` command not found

    - A: `sudo apt install docker-compose` to install docker compose

  - Q: `pip install` failed when `docker compose build`
    - A: `sudo apt update` and `sudo apt-get install python3-dev default-libmysqlclient-dev build-essential python3.8-dev python3.8-distutils libpython3.8-dev libpq-dev` to install the essential lib
