# docker_node
docker部署node实践

docker 是client+host的结构，其中host只能运行在linux内核中，在oxs上安装需要有虚拟机来运行这个host实例。应该也可以指定远程host，指定完成以后docker就能search、pull镜像了。

- ~~第一步，安装osx docker,似乎比较麻烦。[使用proxychains+socks5能搞定]~~
- ~~第二步，安装DockerToolbox，安装失败，本地需要起一个docker服务，macos【linux能直接运行】需要起一个vm来运行host服务，已安装boot2docker。boot2docker init目前执行失败，尝试用proxychains来代理下载，明天试试vpn。~~
- 第一步，从[daocloud](http://get.daocloud.io/)下载Docker ToolBox。安装完成以后可以使用（已经自带了vm和镜像）。
- 第二步，找一个node环境的docker镜像，执行docker search node, 发现第一个node镜像，执行docker pull node，把镜像拖到本地。
- 第三步，运行docker，`docker run -i -t node /bin/bash`。


