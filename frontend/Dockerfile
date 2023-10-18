FROM node:18-alpine AS development

WORKDIR /app/usr/src/frontend

# system package deps
RUN apk update && apk upgrade
RUN apk add --no-cache libc6-compat

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . .

CMD ["ng", "serve", "--watch"]

EXPOSE 4200
