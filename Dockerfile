FROM node:alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install --production

EXPOSE 3004

CMD ["npm", "run", "build"]

CMD [ "npm", "start" ]