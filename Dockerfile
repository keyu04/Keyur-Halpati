# Stage 1: build static files
FROM node:24-alpine AS builder
WORKDIR /app

# copy lockfile and package.json first for better cache
COPY package*.json ./
# If you don't have package-lock.json, replace `npm ci` with `npm install`
RUN npm install

COPY . .
RUN npm run build   # Vite builds into `dist/` by default

# Stage 2: serve with nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# SPA fallback: return index.html for client-side routing
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
