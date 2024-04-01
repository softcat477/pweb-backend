FROM node:20.10-bookworm

RUN apt-get update
RUN apt-get install -y vim net-tools

WORKDIR /code
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN npm install

COPY . /code

CMD [ "node", "index.js" ]
