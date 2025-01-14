FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY /src /usr/src/app/src
COPY tsconfig.json /usr/src/app/

RUN npx tsc 

ENV NODE_ENV=production

EXPOSE 8010

CMD ["node", "dist/index.js"]
