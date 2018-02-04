FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source code inside Docker Image
COPY . .

# Bind app to port 3000
#EXPOSE 3000

# Run node.server.js
CMD ["npm", "start"]
