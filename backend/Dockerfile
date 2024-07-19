FROM node:18-alpine

WORKDIR /docker-node

COPY _helpers/ _helpers/
COPY connection/ connection/
COPY models/ models/
COPY routes/ routes/
COPY services/ services/
COPY *.json .
COPY *.js .

RUN npm install

CMD [ "npm", "start" ]