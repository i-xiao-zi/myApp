console.log(!window.ActiveXObject);
var app = new Vue({
			'el' : '#app',
			data : {
				showPanel: true,
				isActive: true,
				myApps:[
					{
						'name' : 'phpStorm',
						'src' : 'assets/images/phpStorm.jpg',
						'path' : 'file:///D:/PhpStorm/bin/phpstorm64.exe',
					},{
						'name' : 'phpStudy',
						'src' : 'assets/images/phpStorm.jpg',	
						'path' : '',
					},{
						'name' : 'Notepad++',
						'src' : 'assets/images/phpStorm.jpg',	
						'path' : '',
					},{
						'name' : 'Sublime Text 3',
						'src' : 'assets/images/phpStorm.jpg',	
						'path' : '',
					},{
						'name' : 'Navicat',
						'src' : 'assets/images/phpStorm.jpg',	
						'path' : '',
					},{
						'name' : '搜狗浏览器',
						'src' : 'assets/images/phpStorm.jpg',	
						'path' : '',
					},{
						'name' : '有道词典',
						'src' : 'assets/images/phpStorm.jpg',	
						'path' : '',
					}
				],
				tools:[
					 {
						'name' : 'phpstudy',
						'src' : 'http://www.phpstudy.net/phpstudy/phpStudy20161103.zip',
					},{
						'name' : 'Notepad++',
						'src' : 'http://sw.bos.baidu.com/sw-search-sp/software/5d7946e712c83/npp_7.4.1_Installer.exe',
					},{
						'name' : 'Sublime Text 3',
						'src' : 'https://download.sublimetext.com/Sublime%20Text%20Build%203126%20x64%20Setup.exe',
					},{
						'name' : 'PhpStorm',
						'src' : 'https://download.jetbrains.com/webide/PhpStorm-2017.1.4.exe',
					},
				],
				administrations: [
					{
						'name' : 'Git',
						'src' : 'https://github.com/git-for-windows/git/releases/download/v2.13.0.windows.1/Git-2.13.0-64-bit.exe',
					},{
						'name' : 'Xshell_5',
						'src' : 'http://dlsw.baidu.com/sw-search-sp/soft/7b/15201/Xshell_5.0.0.37_setup.1459931786.exe',
					},{
						'name' : 'Xftp_5',
						'src' : 'http://sw.bos.baidu.com/sw-search-sp/software/28f092744fe45/Xftp_5.0.1028.exe',
					},{
						'name' : 'Node.js',
						'src' : 'https://npm.taobao.org/mirrors/node/v6.10.3/node-v6.10.3-x64.msi',
					},{
						'name' : 'Xshell_5',
						'src' : 'http://dlsw.baidu.com/sw-search-sp/soft/7b/15201/Xshell_5.0.0.37_setup.1459931786.exe',
					},{
						'name' : 'Xshell_5',
						'src' : 'http://dlsw.baidu.com/sw-search-sp/soft/7b/15201/Xshell_5.0.0.37_setup.1459931786.exe',
					},
				],
				chats: [
					{
						'name' : 'QQ',
						'src' : 'http://dldir1.qq.com/qqfile/qq/QQ8.9.2/20760/QQ8.9.2.exe',
					},{
						'name' : '微信',
						'src' : 'http://dldir1.qq.com/weixin/Windows/WeChatSetup.exe',
					},
				],
				browses: [
					{
						'name' : '搜狗浏览器',
						'src' : 'http://download.ie.sogou.com/se/sogou_explorer_7.0_0502.exe',
					},{
						'name' : '谷歌浏览器',
						'src' : 'http://sw.bos.baidu.com/sw-search-sp/software/7164c4c6bc6e0/ChromeStandalone_58.0.3029.110_Setup.exe',
					},{
						'name' : '迅雷',
						'src' : 'http://down.sandai.net/thunder9/Thunder9.1.32.752.exe',
					},{
						'name' : '百度网盘',
						'src' : 'http://issuecdn.baidupcs.com/issue/netdisk/yunguanjia/BaiduNetdisk_5.5.5.exe',
					},
				],
				others: [
					{
						'name' : '有道词典',
						'src' : 'http://cidian.youdao.com/download/YoudaoDict.exe',
					},{
						'name' : '有道云笔记',
						'src' : 'http://download.ydstatic.com/notewebsite/downloads/YNote.exe',
					},{
						'name' : 'QQ五笔输入法',
						'src' : 'http://sw.bos.baidu.com/sw-search-sp/software/684d82e9345/QQWubi_Setup_2.2.334.400.exe',
					},{
						'name' : 'WPS',
						'src' : 'https://wdl1.cache.wps.cn/wps/download/W.P.S.6391.12012.0.exe',
					},
				],
			},
			methods: {
				// 判断浏览器类型
				// 如果不是IE 显示提示信息
				isIE: function(){
					if (!!window.ActiveXObject || "ActiveXObject" in window)
				        return false;
				    else
				        return true;
				},
				myAppRun: function(path){
					if(this.isIE()){
						alert('您用的不是IE浏览器，请换用IE浏览器')
					} else{
						try {
							var objShell = new ActiveXObject("wscript.shell");
							objShell.Run(path);
							objShell = null;
							window.close();
						} catch (e) {
							console.log(this.isIE());
						  	alert('找不到文件"'+path+'"(或它的组件之一)。请确定路径和文件名是否正确，而且所需的库文件均可用notepad。')
						}
					}
				}
			}
		});


function checkPanel(obj, id) {
	if(id == 'download') {
		app.showPanel = false;
		app.isActive = false;
	}else{
		app.showPanel = true;
		app.isActive = true;
	}
	console.log(app.showPanel)
}
