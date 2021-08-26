FROM node:latest

RUN npm install -g @angular/cli
RUN npm install -g angular-cli-ghpages

COPY ./ssh/ /root/.ssh/

WORKDIR /app

EXPOSE 80