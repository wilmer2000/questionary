FROM node:20-alpine AS development

WORKDIR /usr/src/app/web

RUN apk update && apk upgrade
RUN apk add --no-cache libc6-compat

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]

