# Use official Node.js LTS (current) image as base
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (to leverage Docker cache for dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port for the app
EXPOSE 3000

# Start the Node.js application
CMD ["npm", "run", "dev"]
 
