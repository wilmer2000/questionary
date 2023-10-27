FROM node:20-alpine AS development

RUN apk update && apk upgrade
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app/api

COPY package*.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm install
RUN npm run build

COPY . .

EXPOSE 3000

FROM node:20-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# system package deps
RUN apk update && apk upgrade
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app/api

COPY --from=development /usr/src/app/api .

EXPOSE 3000

CMD ["node", "dist/main"]