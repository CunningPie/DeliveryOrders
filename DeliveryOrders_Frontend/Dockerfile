FROM node:22-alpine
WORKDIR /app

COPY ["DeliveryOrders_Frontend/package.json", "DeliveryOrders_Frontend/package-lock.json", "./"]

RUN npm ci

COPY  ["DeliveryOrders_Frontend", "."]

EXPOSE 5173

CMD ["npm", "run", "dev"]