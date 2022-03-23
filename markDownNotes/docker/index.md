## docker
> 创建一个镜像容器
```
docker build -t getting-started .
```

> docker主要文件dockerfile

```dockerfile
FROM node:12-alpine
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
RUN npm install
# 此处在容器的3000端口启动服务
CMD ["node", "src/index.js"]
```
通过配置dockerfile，可以将项目使用命令行的形式进行自动化启动；
在命令以上就是在docker中添加一个镜像，在这个容器中启动node项目；

>在容器中启动项目后，将容器的服务端口与本地进行映射，通过这样的方式就可以在本地访问容器中的项目了；
```
docker run -dp 3000:3000 getting-started
```
将本地的3000端口映射到容器的3000端口，即创建一个应用。


### 持久化数据库

每次关闭上一次开启的映射应用后，在其开启应用映射后，上一次数据库的数据回消失；

```
docker run -d ubuntu bash -c "shuf -i 1-10000 -n 1 -o /data.txt && tail -f /dev/null"
```
启动一个ubuntu容器，该容器将创建一个以/data.txt1 到 10000 之间的随机数命名的文件;
以上第二个命令是一个监视文件；

```
docker volume create todo-db
```
使用docker volume create命令创建卷;我们将使用命名卷。将命名卷视为简单的数据桶。Docker 维护磁盘上的物理位置，您只需要记住卷的名称。每次使用卷时，Docker 都会确保提供正确的数据。
```
docker run -dp 3000:3000 -v todo-db:/etc/todos getting-started
```
启动 todo 应用程序容器，但添加-v标志以指定命名卷。我们将使用命名卷并将其挂载到/etc/todos，这将捕获在该路径创建的所有文件。

之后反复切换本地端口，关闭之前的应用映射。数据会被保留，完成数据的持久化；


### 多容器应用
默认情况下，容器是独立运行的，对同一台机器上的其他进程或容器一无所知，容器间通过网络进行通信；

创建一个专用网络 todo-app
```
docker network create todo-app
```
创建一个通过别名(mysql)使用该专用网络的容器
```
docker run -d \
    --network todo-app --network-alias mysql \
    -v todo-mysql-data:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=secret \
    -e MYSQL_DATABASE=todos \
    mysql:5.7
```


启动一个新的容器镜像，并连接到toda-app网络
```
docker run -it --network todo-app nicolaka/netshoot
```

通过todo-app网络将mysql容器与应用程序容器进行连接(在todo-app网络中启动应用程序)
```
docker run -dp 3000:3000 \
  -w /app -v "$(pwd):/app" \
  --network todo-app \
  -e MYSQL_HOST=mysql \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=secret \
  -e MYSQL_DB=todos \
  node:12-alpine \
  sh -c "yarn install && yarn run dev"
```

### Docker Compose

使用 Compose，我们可以创建一个 YAML 文件来定义服务，并且使用一个命令，可以启动所有内容或将其全部关闭。
```
version: "3.8"

services:
# 镜像命名
  app:
  # 应用命名
    image: node:12-alpine
    # 应用容器命令行
    command: sh -c "yarn install && yarn run dev"
    # 外部端口与容器端口映射
    ports:
      - 3000:3000
      # 本地文件位置
    working_dir: /example
    # 容器卷
    volumes:
      - ./:/example
      # 链接mysql的环境变量值
    environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: secret
      MYSQL_DB: todos
# mysql镜像
  mysql:
  # mysql容器命名
    image: mysql:5.7
    # mysql容器卷
    volumes:
      - todo-mysql-data:/var/lib/mysql
      # mysql信息
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: todos


# 整个应用卷
volumes:
  todo-mysql-data:
```
docker-compose.yml文件描述了以上所有的命令行信息

执行
```
docker-compose up -d
```
