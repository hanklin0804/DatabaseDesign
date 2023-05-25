wget https://nodejs.org/dist/v18.16.0/node-v18.16.0-linux-x64.tar.xz
sudo mv node-v18.16.0-linux-x64.tar.xz /usr/local/lib
cd /usr/local/lib
sudo tar -xJf node-v18.16.0-linux-x64.tar.xz
echo 'export PATH=/usr/local/lib/node-v18.16.0-linux-x64/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
node -v
npm -v
npm install -g create-react-app
npx create-react-app frontend
cd frontend
# npm start
npm install react-router-dom
npm install react-bootstrap 
npm install bootstrap 
npm install axios


# 建立目錄結構
mkdir src/components
mkdir src/services
mkdir src/assets

mkdir src/components/Home
mkdir src/components/Login
mkdir src/components/Register
mkdir src/components/HomeUser
mkdir src/components/HomeRestaurant
mkdir src/components/RoleSelection 
mkdir src/components/EditRestaurant  
mkdir src/components/ManageMenuItems   

touch src/components/Home/Home.js
touch src/components/Home/Home.css
touch src/components/HomeUser/HomeUser.js
touch src/components/HomeUser/HomeUser.css
touch src/components/HomeRestaurant/HomeRestaurant.js
touch src/components/HomeRestaurant/HomeRestaurant.css
touch src/components/EditRestaurant/EditRestaurant.js
touch src/components/EditRestaurant/EditRestaurant.css
touch src/components/ManageMenuItems/ManageMenuItems.js
touch src/components/ManageMenuItems/ManageMenuItems.css
touch src/components/Login/Login.js
touch src/components/Login/Login.css
touch src/components/Register/Register.js
touch src/components/Register/Register.css
touch src/components/RoleSelection/RoleSelection.js
touch src/components/RoleSelection/RoleSelection.css
touch src/services/api.js
