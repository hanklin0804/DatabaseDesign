wget https://nodejs.org/dist/v18.16.0/node-v18.16.0-linux-x64.tar.xz
sudo mv node-v18.16.0-linux-x64.tar.xz /usr/local/lib
cd /usr/local/lib
sudo tar -xJf node-v18.16.0-linux-x64.tar.xz
echo 'export PATH=/usr/local/lib/node-v18.16.0-linux-x64/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
cd ~/UberEat
