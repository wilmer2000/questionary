FROM node:18-alpine AS development

# system package deps
RUN apk update && apk upgrade
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm run build

EXPOSE 4200
