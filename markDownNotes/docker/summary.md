## 总结docker
对于本地开发者；可以直接docker build，docker pull,docker run本地开发完成可直接推送到云端，公网容器重新拉去docker容器重新拉取部署即可；


对于ci/cd流程化，开发者将代码发布到github，在github中建立ci/cd工作流，重建docker-build;公网容器重新拉去docker进行启动部署即可；
