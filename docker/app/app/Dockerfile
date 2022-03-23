

# FROM node:12-alpine
# # Adding build tools to make yarn install work on Apple silicon / arm64 machines
# RUN apk add --no-cache python2 g++ make
# WORKDIR /app
# COPY . .
# RUN npm install
# CMD ["node", "src/index.js"]


# 优化后的内容

FROM node:12-alpine
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["node", "src/index.js"]