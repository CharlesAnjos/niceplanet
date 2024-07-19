FROM node:18-alpine

WORKDIR /docker-vue

COPY public/ public/
COPY src/ src/
COPY .env .
COPY *.html .
COPY *.json .
COPY *.js .

RUN npm install

CMD [ "npm", "run", "dev" ]