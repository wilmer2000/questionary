# Base image
FROM node:18-alpine

# system package deps
RUN apk update && apk upgrade
RUN apk add --no-cache libc6-compat
#
# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app will run on
EXPOSE 4200

# Start the Angular application
CMD ["npm", "start"]
