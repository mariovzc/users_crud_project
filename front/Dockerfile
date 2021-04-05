FROM node:14.1.0-alpine3.11

ENV PORT 3000

ENV PATH /app/node_modules/.bin:$PATH
RUN mkdir /app
WORKDIR /app
EXPOSE 3000

WORKDIR /app

COPY package* /app/
# RUN yarn install

# COPY . /app
# RUN yarn build

ENTRYPOINT ["yarn", "start"]
