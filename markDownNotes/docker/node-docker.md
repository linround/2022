### 容器命令相关
```
# 运行容器
docker run --publish 8000:8000 node-docker

# 以分离模式运行容器(处理终端切换问题)
docker run -d -p 8000:8000 node-docker

#  列出容器
docker ps


#  列出容器
docker ps


#  停止容器
docker stop <容器ID>


#  重启容器
docker restart <容器ID>


#  列出所有容器（关闭的和开启的）
docker ps --all


#  移除容器
docker rm <容器ID>


#  命名容器node-docker命名为rest-server(解决容器随机命名问题)
docker run -d -p 8000:8000 --name rest-server node-docker

```


### 本地数据库和容器

创建几个 Docker 可以管理的卷来存储我们的持久数据和配置。
```
docker volume create mongodb
docker volume create mongodb_config
```

现在我们将创建一个网络，我们的应用程序和数据库将使用该网络相互通信。该网络称为用户定义的桥接网络，它为我们提供了一个很好的 DNS 查找服务，我们可以在创建连接字符串时使用它。
```
docker network create mongodb
```

创建mongo镜像，创建mongodb容器 链接之前的mogodb网络，在容器中运行mongo;
```
docker run -it --rm -d -v mongodb:/data/db \
 -v mongodb_config:/data/configdb -p 27017:27017 \
 --network mongodb \
 --name mongodb \
 mongo
```


运行容器，链接网络，映射端口，设置环境变量，运行的镜像
```
docker run \
  -it --rm -d \
  --network mongodb \
  --name rest-server \
  -p 8000:8000 \
  -e CONNECTIONSTRING=mongodb://mongodb:27017/notes \
  node-docker
```


 Compose 文件以使用一个命令启动我们的 node-docker 和 MongoDB。我们还将设置 Compose 文件以在调试模式下启动 node-docker，以便我们可以将调试器连接到正在运行的节点进程。(yml文件可以快速启动镜像)


 ```
version: '3.8'

services:
 notes:
  build:
   context: .
  ports:
   - 8000:8000
   - 9229:9229
  environment:
   - SERVER_PORT=8000
   - CONNECTIONSTRING=mongodb://mongo:27017/notes
  volumes:
   - ./:/app
  command: npm run debug

 mongo:
  image: mongo:4.2.8
  ports:
   - 27017:27017
  volumes:
   - mongodb:/data/db
   - mongodb_config:/data/configdb
volumes:
 mongodb:
 mongodb_config:
 ```

启动容器
```
docker-compose -f docker-compose.dev.yml up --build
```




#### 工作流的理解


在github上配置工作流，工作流执行（根据dockerfile）创建镜像；
