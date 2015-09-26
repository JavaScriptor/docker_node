# docker_node
docker部署node实践

docker 是client+host的结构，其中host只能运行在linux内核中，在oxs上安装需要有虚拟机来运行这个host实例。应该也可以指定远程host，指定完成以后docker就能search、pull镜像了。

- ~~第一步，安装osx docker,似乎比较麻烦。[使用proxychains+socks5能搞定]~~
- ~~第二步，安装DockerToolbox，安装失败，本地需要起一个docker服务，macos【linux能直接运行】需要起一个vm来运行host服务，已安装boot2docker。boot2docker init目前执行失败，尝试用proxychains来代理下载，明天试试vpn。~~
- 第一步，从[daocloud](http://get.daocloud.io/)下载Docker ToolBox。安装完成以后可以使用（已经自带了vm和镜像）。
- 第二步，找一个node环境的docker镜像，执行docker search node, 发现第一个node镜像，执行docker pull node，把镜像拖到本地。
- 第三步，运行docker，`docker run -i -t node /bin/bash`。
- 第四步，[在镜像环境中]拿到的是一个ubuntu的裸系统+node环境，先更新，执行apt-get update。
- 第五步，[在镜像环境中]apt-get install vim。
- 第六步，[在镜像外]docker commit af12a9781d1f node_and_vim，形成一个自己的镜像，该镜像同时带有node和vim；在docker images中查看。
- 第七步，在docker镜像中手写一个简单的node-httpserver，见文件server.js。
- 第八步，目前有点问题，从[这里](http://yangrong.blog.51cto.com/6945369/1582184)看到端口映射后台启动，但是不知道在哪里。具体命令 'docker run -h "node-server1" -p 3003:3000 -d server /usr/local/bin/node'
- 第九步，【找docker run -d以后的进程跑在哪里了，目前ps -ef 和 docker ps、docker images都没找到】。
1. 研究docker端口映射启动，并测试可用； 今天要搞定。


TODO: 

2. docker image中写好启动脚本；
3. 在项目中添加批量启动docker的脚本;
4. 在项目中增加nginx负载均衡配置，并测试nginx+docker负载均衡可用；
5. 测试并发、对比单独的http-server的并发、对比nginx+pm2的并发；
6. 提升部署效率，评估是否可以推广；
7. 使用监控宝监控docker运行状态；
8. 研究《Docker容器与容器云》浙大SEL实验室的书；
9. Rreact.js 开发前端组件并研究与docker分布式系统的组合使用(避免冲突，目前觉得冲突可能性小，分布与前端组件没有直接关系，可以总结一些适用于分布式系统的组件设计)。

