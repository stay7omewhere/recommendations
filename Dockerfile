FROM node:alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app
# COPY server /src/app/server
# COPY database /src/app/database
# COPY package.json /src/app
# COPY yarn.lock /src/app

RUN npm install --prod

EXPOSE 3004

CMD [ "npm", "start" ]