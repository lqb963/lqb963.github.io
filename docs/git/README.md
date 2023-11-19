# git

## git 是什么

分布式版本控制工具

## git 安装

[linux、Mac、Windows 的 git 安装教程](https://www.runoob.com/git/git-install-setup.html)

## git 配置

## git 指令

1. git config --global
2. git config --system
3. git config --list
4. git --version

## .gitconfig

1. /etc/gitconfig 文件：系统中对所有用户都普遍适用的配置。若使用 git config 时用 --system 选项，读写的就是这个文件。
2. ~/.gitconfig 文件：用户目录下的配置文件只适用于该用户。若使用 git config 时用 --global 选项，读写的就是这个文件。
3. 当前项目的 Git 目录中的配置文件（也就是工作目录中的 .git/config 文件）：这里的配置仅仅针对当前项目有效。每一个级别的配置都会覆盖上层的相同配置，所以 .git/config 里的配置会覆盖 /etc/gitconfig 中的同名变量。

## .gitignore
