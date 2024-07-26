# Use an official Node.js runtime as the parent image
FROM node:22 AS build

# Set the working directory
WORKDIR /server

# Copy packaigng.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install pnpm  
RUN npm install -g pnpm

# Install all dependencies
RUN pnpm install

# Copy the rest of the application
COPY . .

# Build the application
RUN pnpm build

# Use smaller base image
FROM node:22

# Set the working directory
WORKDIR /server

# Install pnpm  
RUN npm install -g pnpm

# Copy only the necessary files from the build stage
COPY --from=build /server .

# Install dependencies based on the environment
ARG NODE_ENV

RUN if [ "$NODE_ENV" = "production" ]; \
    then pnpm install --only=production; \
    else pnpm install; \
    fi

# Expose the port
EXPOSE 8080

# Run the server
CMD ["node", "build/app.js"]
