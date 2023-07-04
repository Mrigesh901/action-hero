FROM node:12-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
 
#USER node

EXPOSE 3333
CMD ["npm", "start"]