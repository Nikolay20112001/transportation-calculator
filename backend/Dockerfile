FROM node:16-alpine

COPY package.json ./
RUN npm install

COPY src ./src
COPY tsconfig.json ./tsconfig.json

RUN npm run build

ENV NODE_ENV=production

EXPOSE 8010

CMD ["npm", "start"]
