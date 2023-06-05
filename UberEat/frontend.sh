wget https://nodejs.org/dist/v18.16.0/node-v18.16.0-linux-x64.tar.xz
sudo mv node-v18.16.0-linux-x64.tar.xz /usr/local/lib
cd /usr/local/lib
sudo tar -xJf node-v18.16.0-linux-x64.tar.xz
echo 'export PATH=/usr/local/lib/node-v18.16.0-linux-x64/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
node -v
npm -v
# npm install -g create-react-app
# npx create-react-app frontend
# cd frontend
# # npm start
# npm install react-router-dom
# npm install react-bootstrap 
# npm install bootstrap 
# npm install axios

# # 模擬API用
# npm install -g json-server 
# echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
# sudo sysctl -p



# # 建立目錄結構
# mkdir src/components
# mkdir src/services
# mkdir src/assets

# mkdir src/components/Home
# mkdir src/components/Login
# mkdir src/components/Register
# mkdir src/components/HomeUser
# mkdir src/components/HomeRestaurant
# mkdir src/components/RoleSelection 
# mkdir src/components/EditRestaurant  
# mkdir src/components/ManageMenu   
# mkdir src/components/UserCart
# mkdir src/components/UserCheckout
# mkdir src/components/UserMenuDetail
# mkdir src/components/UserOrderConfirmation
# mkdir src/components/UserOrderHistory
# mkdir src/components/UserOrderStatus
# mkdir src/components/UserRatingsAndReviews
# mkdir src/components/UserRestaurantDetail

# touch src/components/Home/Home.js
# touch src/components/Home/Home.css
# touch src/components/HomeUser/HomeUser.js
# touch src/components/HomeUser/HomeUser.css
# touch src/components/HomeRestaurant/HomeRestaurant.js
# touch src/components/HomeRestaurant/HomeRestaurant.css
# touch src/components/EditRestaurant/EditRestaurant.js
# touch src/components/EditRestaurant/EditRestaurant.css
# touch src/components/ManageMenu/ManageMenu.js
# touch src/components/ManageMenu/ManageMenu.css
# touch src/components/Login/Login.js
# touch src/components/Login/Login.css
# touch src/components/Register/Register.js
# touch src/components/Register/Register.css
# touch src/components/RoleSelection/RoleSelection.js
# touch src/components/RoleSelection/RoleSelection.css
# touch src/components/UserCart/UserCart.js
# touch src/components/UserCart/UserCart.css
# touch src/components/UserCheckout/UserCheckout.js
# touch src/components/UserCheckout/UserCheckout.css
# touch src/components/UserMenuDetail/UserMenuDetail.js
# touch src/components/UserMenuDetail/UserMenuDetail.css
# touch src/components/UserOrderConfirmation/UserOrderConfirmation.js
# touch src/components/UserOrderConfirmation/UserOrderConfirmation.css
# touch src/components/UserOrderHistory/UserOrderHistory.js
# touch src/components/UserOrderHistory/UserOrderHistory.css
# touch src/components/UserOrderStatus/UserOrderStatus.js
# touch src/components/UserOrderStatus/UserOrderStatus.css
# touch src/components/UserRatingsAndReviews/UserRatingsAndReviews.js
# touch src/components/UserRatingsAndReviews/UserRatingsAndReviews.css
# touch src/components/UserRestaurantDetail/UserRestaurantDetail.js
# touch src/components/UserRestaurantDetail/UserRestaurantDetail.css

# touch src/services/api.js
