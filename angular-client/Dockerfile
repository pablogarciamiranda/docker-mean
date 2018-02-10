FROM node:carbon

# Create app directory
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source code inside Docker Image
COPY . /usr/src/app

# Bind app to port 4200 and 49153
EXPOSE 4200 49153

# Run node.server.js
CMD ["npm", "start"]
