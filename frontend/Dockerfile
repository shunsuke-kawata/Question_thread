FROM node:16.14.2
WORKDIR /usr/src/app

COPY ./package.json ./package.json

COPY ./package-lock.json ./package-lock.json
RUN npm install
ENTRYPOINT [ "npm", "start" ]
