# Stage 1: Build the Next.js application
FROM node:22.21.0-alpine as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Stage 2: Serve the Next.js application
FROM node:22.21.0-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
CMD ["yarn", "start"]

# # Nginx
# FROM nginx:latest
# COPY --from=builder /app/build /usr/share/nginx/html
# COPY --from=builder /app/nginx/nginx.conf /etc/nginx/nginx.conf
# EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]