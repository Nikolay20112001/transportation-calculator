FROM node:16-alpine
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY webpack.config.js .
COPY /src/ ./src/
RUN npm install
EXPOSE 8080

#RUN npm run dev
CMD [ "npm", "run", "dev" ]
