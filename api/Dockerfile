FROM node:alpine AS base
WORKDIR /app
COPY . .
EXPOSE 3000
RUN npm install

FROM base AS development
CMD [ "npm", "run", "dev" ]

FROM base AS production
RUN npm run build
CMD [ "npm", "start" ]
