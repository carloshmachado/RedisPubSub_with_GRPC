FROM node:18-alpine

WORKDIR /app

RUN apk add --update --no-cache libc6-compat openssl openssl-dev tzdata g++ make py3-pip

ENV NODE_ENV=production
ENV TZ=America/Sao_Paulo

COPY ./ /app

COPY ["package.json", "./"]
COPY ["package-lock.json", "./"]

RUN npm install \
    && npm i -g prisma

RUN npm run prisma-generate

EXPOSE ${PORT}

RUN npm run build

CMD ["npm", "start"]
