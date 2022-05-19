# syntax=docker/dockerfile:1

FROM node:16 AS APP

WORKDIR /front

COPY package*.json .

RUN npm i

COPY . .

RUN npm run build

FROM nginx:1.21.6 AS NGINX
 
COPY --from=APP /front/dist/project /usr/share/nginx/html
COPY ./default.conf  /etc/nginx/conf.d/default.conf

EXPOSE 4200