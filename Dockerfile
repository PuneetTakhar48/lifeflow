FROM node:18-alpine

WORKDIR /app

# Copy root package.json
COPY package*.json ./

# Install root dependencies
RUN npm install

# Copy backend files
COPY backend/ ./backend/

# Install backend dependencies
WORKDIR /app/backend
RUN npm install --production

# Expose port
EXPOSE 10000

# Start the application
CMD ["npm", "start"]