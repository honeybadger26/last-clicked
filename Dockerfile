FROM node:alpine AS base

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
