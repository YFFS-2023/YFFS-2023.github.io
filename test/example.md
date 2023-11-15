# Linux

## Linux 安装

> Part 1 : Download and install

## Linux 系统启动过程

> Part 1 : 启动过程

- 内核的引导
- 运行init
- 系统初始化
- 建立终端
- 用户登录系统

> Part 2 : 运行级别

0. 系统停机状态
1. 单用户工作状态
2. 多用户状态，无NFS
3. 多用户状态，有NFC，登陆后进入控制台命令行模式
4. 系统未使用，保留
5. X11控制台，登陆后进入GUI模式
6. 系统正常关闭并重启，默认运行级别不能设为6，否则无法正常使用

> Part 3 : 关机命令

```
sync  # 将数据由内存同步到硬盘上
shutdown # 关机指令，可以使用man shutdown 查看帮助文档
shutdown -h 10 "this server will shutdown after 10 mins" # 十分钟后关机
shutdown -h now # 立刻关机
shutdown -h 20:25 # 今天的20：25关机
shutdown -h +10 # 十分钟后关机
shutdown -r now # 系统立马重启
shutdown -r +10 # 十分钟后重启
reboot # 重启
halt # 关闭系统，相当于shutdown -h now
shutdown -c # 取消定时关机指令
```

## Linux 系统目录结构

> Part 1 : 树状结构

![树状结构图](Picture/Snipaste_2023-03-02_09-35-02.jpg)

> Part 2 : 各个目录介绍

```
/bin : bin是Binaries的缩写，存放着最经常使用的命令
/boot: 存放着启动Linux时使用的一些核心文件，包括一些连接文件以及镜像文件
/dev : Device缩写，存放的是Linux的外部设备
/etc : Etcetera(等等)的缩写，存放系统管理所需要的配置文件和子目录
/home: 用户的主目录
/lib : Library缩写，，存放着系统最基本的动态连接共享库
/lost+found:系统非法关机时，存放文件
/media: 自动识别的设备，将设备挂载在这个目录下
/mnt : 给用户临时挂在其他文件系统
/opt : optional缩写，给主机额外安装软件所摆放的目录
/proc:Processes的缩写，存储的是当前内核运行状态的特殊文件，目录内容存放在内存中
	# 使用 echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all 命令使别人无法ping该主机
/root: 系统管理员的用户主目录
/sbin: Superuser Binaries存放系统管理员使用的系统管理程序
/tmp : temporary存放一血临时文件
/usr :unix shared resources类似于windows下的program files目录
/usr/bin : 系统用户使用的应用程序
/user/src : 内核源代码默认存储目录
```

## Linux遗忘密码

[article](../Linux找回root密码.txt)

## Linux远程登陆

> Part 1 : xshell

## Linux 文件基本属性

> Part 1 : chgrp 修改文件所属组

```
chgrp [-R] 属组名 文件名/文件夹名  # -R:递归
```

> Part 2 : chown 修改所属用户和用户组

```
chown [-R] 属主名 文件名/文件夹名  # -R:递归
chown [-R] 属主名 : 属组名 文件名/文件夹名  # -R:递归
```

> Part 3 : chmod 修改用户的权限

```
chmod [-R] xyz 文件/文件夹  # -R:递归
chmod u=rwx,g=rx,o=r 文件/问价夹
```

## Linux文件与目录管理

> Part 1 : 常用命令：ls、cd、pwd、mkdir、rmdir、cp、rm、mv

- 可以使用man命令查询使用方法

> Part 2 : 命令使用

```
ls -a -d -l # 全部显示、只显示文件夹、以列表形式显示
cd 切换目录
pwd 显示当前所在目录 -P 显示确定的路径，而非link路径
mkdir -m -p dir_name # 指定权限、递归创建
rmdir -p dir_name # 递归删除、仅能删除空目录，可以使用rm删除
cp 复制 -r:递归复制 -i:若目标文件存在，覆盖前询问
rm -f{强行} -i{互动模式} -r{递归}
mv -f{强行} -i{互动} -u{已存在的版本低则更新}
```

> Part 3 : 查看文件内容

```
命令: 
cat 从第一行开始显示文件内容 -n 显示行号
tac 从最后一行开始显示，是cat命令的倒着写
nl 显示的时候，顺道输出行号
more 一页一页的显示文件内容 space往下翻一页、Enter往下翻一行、/string向下搜索、q退出
less 比more更好，可以往前翻页 pageup向上翻动一页
head 只看头几行 -n number 显示number行
tail 只看尾几行
```

> Part 4 : 查找文件 Unfinished

```
find
locate
```

## Linux用户和用户组管理

> Part 1 : 系统用户账号管理

- useradd -g groupname username 指定组名添加

- userdel -r username 删除用户及其主目录

- usermod -g groupname username 修改组

- passwd username 设置密码 -d 无密码 -f 强迫下次登陆时修改口令 -l 锁定用户 -u 解锁用户

  > Part 2 : 用户组的管理

- groupadd -g groupname 指定GID
- groupdel groupname 删除
- groupmod -n newName groupname 修改名字

> Part 3 : 相关文件

- /etc/passwd 记录了用户的基本属性
  - 基本格式：用户名:口令:用户标识号:组标识号:注释性描述:主目录:登录Shell
- /etc/shadow 自动生成
  - 基本格式：登录名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:标志
- /etc/group 用户组的信息
  - 基本格式：组名:口令:组标识号:组内用户列表

> Part 3 : 查询用户信息

```
id username
whoami 查看登录者的相关信息
```

## Linux磁盘管理

> Part 1 : 常用命令：df、du、fdisk

```
df -a列出所有/-k以KB显示/-m以MB显示/-h以人们易于理解的显示/-H切换成1000进位/-T显示文件系统类型 目录/文件名
du -a列出所有/-h以人们易于理解的显示/-s列出总容量，没有占比/-k以KB显示/-m以MB显示
fdisk -l 装置名称 ：显示所有的
mkfs -t 文件系统 文件地址  ： 格式化磁盘
fsck -t 文件系统 [ parameter ] 装置名称  ： 检查磁盘
```

> Part 2 : 磁盘的挂载和卸除

```
mount [-t 文件系统] [-L Label名] [-o 额外选项] [-n] 装置文件名 挂载点
umount [-fn] 装置文件名或者挂载点
```

## Linux vi/vim

> Part 1 : what is vim?

![vi/vim 键盘图](Picture/Snipaste_2023-03-03_14-36-19.jpg)

> Part : how to use vim?

- vim 分为三种模式：命令模式、输入模式、底线命令模式
  - i : 进入输入模式
  - x：删除光标所处的字符
  - ：切换到底线命令模式，在最底一行输入命令
  - q 退出程序
  - w 保存文件
  - 10h：向左移动十个字符
  - 10j：向下移动十个字符
  - 10k：向上移动十个字符
  - 10l：向右移动十个字符
  - 10G: 移动到第十行
  - G：移动到最后一行
  - 10yy 复制所在行向下的10行
  - p：粘贴
  - .：重复上一个动作
- 输入模式
  - insert：切换光标为输入/替换模式，光标将变成竖线/下划线
  - ESC：退出输入模式，切换到命令模式
- 底线命令模式
  - q! 强制离开
  - set nu 显示行号
  - set nonu不显示行号

## Linux yum

> Part 1：万能语法 

```
yum [options] [command] [package ...]
```

> Part  2：常用命令

```
yum check-update 列出所有可更新的软件清单名单
yum update 更新所有软件
yum install <package_name> 安装指定的软件
yum update <package_name> 更新指定的软件
yum list  列出所有可安装的软件清单
yum remove <package_name> 删除软件包命令
yum search <key_word> 查找软件包信息
yum clean 清理缓存目录下的软件包
yum clean headers 清理缓存目录下的headers
yum clean oldheaders 清理旧的headers
```

> Part 3 : 切换yum源

```
# step 1 : backup
mv /ect/yum.repos.d/CentOS-Base.repo /ect/yum.repos.d/CentOS-Base.repo.backup

# step 2 : Download the corresponding version repo file and move to /etc.yum.repos.d/
wget url
mv file1 file2

# step 3 : clean cache
yum clean all
yum makecache
```

## Linux apt

> Part 1 ： basic command

```
apt [options] [command] [package ...]
```

> Part 2 : common commands

```
sudo apt update : update all renewable software
sudo apt upgrade : update package
sudo apt install <package_name>
sudo apt install <package_name1> <package_name2>
sudo apt show <package> : show relative infomation
sudo apt remove <package> : remove package
sudo apt autoremove : 清理不再使用的依赖和库文件
sudo apt perge <package> : 移出软件包及配置文件
sudo apt seatch <keyword> ：查找软件包命令
apt list --installed : 列出所有安装的包
apt lsit --all-versions : 列出所有已安装的包的版本信息
```

