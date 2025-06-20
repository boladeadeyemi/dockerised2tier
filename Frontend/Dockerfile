# Stage 1: Build the React app
FROM node:22.15.0 AS build

WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Clean existing NGINX static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output to NGINX directory
COPY --from=build /app/dist /usr/share/nginx/html

# Optionally, use a custom nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf  

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
