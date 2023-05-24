FROM node:lts

COPY package.json package-lock.json ./

# Install project dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the desired port for the application
EXPOSE 3000

# Set the command to start the app
CMD ["npm", "run", "start"]