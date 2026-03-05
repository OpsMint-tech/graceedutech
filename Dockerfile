# Build stage
FROM node:20-slim AS build

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install all dependencies (needed for build tools like esbuild and vite)
RUN npm install

# Copy source code
COPY . .

# Build the application
# This runs Vite for the frontend and esbuild for the backend
RUN npm run build

# Runtime stage
FROM node:20-slim AS runtime

WORKDIR /app

# Copy dependency manifests for production install
COPY package*.json ./

# Install only production dependencies
# Note: Some dependencies might still be needed if not bundled by esbuild
RUN npm install --omit=dev

# Copy the built assets from the build stage
COPY --from=build /app/dist ./dist

# Expose the application port (consistent with server/index.ts default)
ENV PORT=5001
EXPOSE 5001

# Command to start the application
CMD ["node", "dist/index.cjs"]
