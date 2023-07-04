FROM node:12-alpine AS build
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/build /usr/share/nginx/html
#RUN adduser -D -g '' newuser
#USER newuser
#COPY /nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 3000
ENTRYPOINT ["nginx", "-g", "daemon off;"]