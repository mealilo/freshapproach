# To build the Docker image
# docker build -t freshapproach

# To run the Docker image with nextjs user
# docker run -p 3000:3000 --user=root freshapproach

# To run the Docker image in the background
# docker run -d -p 3000:3000 freshapproach

# To stop the Docker image
# docker stop <container id>


# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code to the working directory
COPY . .

RUN npx prisma generate

# Build the production version of the application
RUN npm run build

# Set the environment variables for the database connection
ENV DATABASEURL=env("DATABASE_URL")

# RUN groupadd -r nextjs && useradd --no-log-init -r -g nextjs nextjs
USER nextjs

# Expose the port that the application will run on
EXPOSE 3000

# Start the application
CMD [ "npm", "run", "start" ]