# # syntax=docker/dockerfile:1
# # 基于节点版本 12.18.1 的映像
# FROM node:12.18.1


# # 提高性能可以做的最简单的事情之一就是设置NODE_ENV为production
# ENV NODE_ENV=production


# # 指示 Docker 将此路径用作所有后续命令的默认位置
# WORKDIR /app


# # 将package.json和package-lock.json文件复制到我们的工作目录/app中
# COPY ["package.json", "package-lock.json*", "./"]

# # 只是复制 package.json 文件，而不是复制整个工作目录。这使我们能够利用缓存的 Docker 层
# RUN npm install --production

# # 此时，我们有一个基于节点版本 12.18.1 的映像，并且我们已经安装了我们的依赖项。接下来我们需要做的是将我们的源代码添加到图像中
# COPY . .

# # COPY 命令获取位于当前目录中的所有文件并将它们复制到映像中。现在，我们所要做的就是告诉 Docker 当我们的镜像在容器内运行时我们想要运行什么命令
# CMD [ "node", "server.js" ]





# # 构建测试
# syntax=docker/dockerfile:1
# FROM node:14.15.4 as base

# WORKDIR /code

# COPY package.json package.json
# COPY package-lock.json package-lock.json

# FROM base as test
# RUN npm ci
# COPY . .
# CMD [ "npm", "run", "test" ]

# FROM base as prod
# RUN npm ci --production
# COPY . .
# CMD [ "node", "server.js" ]


# 使用run语句而不是CMD语句进行构建简化
# 使用cmd只在容器运行时执行，而run命令在创建容器时就会执行
# 因此使用run命令会在容器自动化构建时就开始执行脚本
# 以此在运行前就执行自动化测试过程
# syntax=docker/dockerfile:1
FROM node:14.15.4 as base

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json

FROM base as test
RUN npm ci
COPY . .
RUN npm run test

FROM base as prod
RUN npm ci --production
COPY . .
RUN [ "node", "server.js" ]