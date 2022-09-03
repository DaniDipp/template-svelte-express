FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM node:18-alpine
WORKDIR /app
EXPOSE 8080
COPY ./package*.json ./
RUN npm ci --only=production
COPY --from=build /app/build/ ./build/
CMD ["node", "."]