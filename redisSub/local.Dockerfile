FROM node:14-alpine

WORKDIR /app

RUN apk add --update --no-cache libc6-compat openssl openssl-dev tzdata

ENV NODE_ENV=development
ENV TZ=America/Sao_Paulo

COPY ./ /app
COPY ./prisma /app/prisma

COPY ["package.json", "./"]
COPY ["package-lock.json", "./"]

RUN apk add --update --no-cache --virtual build-dependencies \
    g++ \
    make \
    && npm set registry http://npm.tecnospeed.local \
    && npm install \
    && npm i -g prisma \
    && apk del build-dependencies

RUN npx prisma generate

EXPOSE ${PORT}

RUN npm run build

CMD ["npm", "start"]
