# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g nodemon

# Copy the rest of the app
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the app
CMD ["npm", "start"]