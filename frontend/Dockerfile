FROM node:alpine AS base
WORKDIR /app
COPY . .
EXPOSE 3000

FROM base AS development
RUN npm install
CMD [ "npm", "run", "dev" ]

FROM development AS staging
CMD [ "npm", "run", "lint" ]

FROM base AS production
RUN npm ci && npm run build
CMD [ "npm", "start" ]
