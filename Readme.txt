﻿第一次使用github，放个刚学的Nodejs上来玩玩。

本来想为本篇取一个更好点的名字，但没有想到，只好就把这篇文章（笔记）叫做：

我是这样使用github的

其实也就是根据http://help.github.com/win-set-up-git/
一步一步走的啦。
1，安装这一步也要跳过了，上面这个地址上面的截图很是详尽。
2，设置SSH Keys.这一步有原文分了4个小节，其实也没这个必要。我就全写在一块吧。
	2.1首先就是检测你有没有已有的key,如有就备份喽。没有就生成呗。
	Start=>Git=>Git Bash
	cd ~/.ssh
	ls
	做到这里，发现你也很多文件出来，说明你已经有存在的key,备份的命令如下：
	mkdir key_backup
	cp id_rsa* key_backup
	rm id_rsa*
	至于生成的命令就没有这么复杂，其实上面也不复杂，跟以前的dos命令差不多，就是先建立一个文件夹，然后将
	以id_rsa开头的文件复制进去，然后再删掉，不扯这些，扯生成：
	ssh-keygen -t rsa -C "your_email@youemail.com"
	这里建议全部直接回车就可以了
	2.2在GitHub网站上 Click “Account Settings” > Click “SSH Keys” > Click “Add SSH key”
	至于这个key，得到很简单，用记事本之类的打开刚生成一个叫id_rsa.pub的文件，将里面的内容全部复制上去就OK了。
3，测试一下：
ssh -T git@github.com
看到hi了就OK了
4,设置一下个人信息
git config --global user.name "Firstname Lastname"
git config --global user.email "your_email@youremail.com"

git config --global github.user username
git config --global github.token 0123456789yourf0123456789token
这里有点小郁闷的是最后一个token,这个bash不能直接复制粘贴，我是对着我的帐号上面的API token一个一个输的。

以上建好了，就可以使用了。接下来我就开始建仓库了。repository.操作简单，直接在网站上找到new repository,输入你的project name，然后按create project就完事了。
最后就是上传代码了。
先到你本机的存放项目的文件夹中，右键选Git init here,完了之后，会有一个.git的文件夹生成在文件夹当中。最后再右键选Git Gui，调出图形界面。后面的就不讲了。都在window下面混的人，后面好说了。








