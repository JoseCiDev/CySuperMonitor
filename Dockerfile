# Use the official Node.js image as base
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Cypress dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the necessary ports (if your app is running on a specific port)
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
