// 输入框检验
function checkUsername() {
	var inputOb = document.getElementsByName('username')[0];
	var v = inputOb.value;
	var re = /^[A-Z]{1}[a-z]{1,5}$/.test(v);
	
	if(re) {
		inputOb.style.color = "palegreen";
		return true;
	}else {
		inputOb.style.color = "indianred";
		return false
	}
}
function checkPassword() {
	var inputOb = document.getElementsByName('password')[0];
	var v = inputOb.value;
	var re = /^\S{3}$/.test(v);
	if(re) {		
		inputOb.style.color = "palegreen";
		return true;
	}
	else {
		inputOb.style.color = "indianred";
		return false
	}
}
// 获取音乐弹窗
var modal_design = document.getElementById('myModalDesign');
// 获取帮助弹窗
var modal_help = document.getElementById('myModalHelp');
// 获取忘记密码弹窗
var password = document.getElementById('my_password');
// 获取微信弹窗
var wechat = document.getElementById('wechat');
// 获取微博弹窗
var weibo = document.getElementById('weibo');
// 获取QQ弹窗
var qq = document.getElementById('qq');

//点击音乐按钮,打开弹窗
function modalDesign() {
	modal_design.style.display = "block";
}
//点击帮助按钮,打开弹窗
function modalHelp() {
	modal_help.style.display = "block";
}
//点击忘记密码,打开弹窗
function forgetPassword() {
	password.style.display = "block";
}
//点击微信按钮,打开弹窗
function weChat() {
	wechat.style.display = "block";
}
//点击微博按钮,打开弹窗
function weiBo() {
	weibo.style.display = "block";
}
//点击QQ按钮,打开弹窗
function qQ() {
	qq.style.display = "block";
}

//点击(X)按钮,关闭音乐弹窗
function designClose() {
	modal_design.style.display = "none";
}
// //点击(X)按钮,关闭帮助弹窗
function helpClose() {
	modal_help.style.display = "none";
}
//点击(X)按钮,关闭密码弹窗
function passwordClose() {
	password.style.display = "none";
}
//点击(X)按钮,关闭微信弹窗
function wechatClose() {
	wechat.style.display = "none";
}
//点击(X)按钮,关闭微博弹窗
function weiboClose() {
	weibo.style.display = "none";
}
//点击(X)按钮,关闭QQ弹窗
function qqClose() {
	qq.style.display = "none";
}

// 在用户点击其他地方时，关闭弹窗
window.onclick = function(event) {
	if (event.target == modal_design) {  //返回触发此事件的元素（事件的目标节点
		modal_design.style.display = "none";
	}
	if (event.target == modal_help) {
		modal_help.style.display = "none";
	}
	if(event.target == password) {
		password.style.display = 'none';
	}
	if(event.target == wechat) {
		wechat.style.display = "none";
	}
	if(event.target == weibo) {
		weibo.style.display = "none";
	}
	if(event.target == qq) {
		qq.style.display = "none";
	}
}

// 点击垃圾桶按钮,重置表单
function new_help() {
	document.getElementById('myForm').reset();
}
