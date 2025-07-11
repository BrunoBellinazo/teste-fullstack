# build do projeto
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# execução
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app /app
EXPOSE 3000
CMD ["node", "dist/server.js"]