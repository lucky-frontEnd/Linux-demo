// 时间
function newTime () {
    var data = new Date();
    var y = data.getFullYear();
    var m = data.getMonth() + 1;
    var t = data.getDate();
    var time = y + '/' + m + '/' + t;    
    return time;
}
var time = newTime()
$('div #timer').html(time);
$('#bottom_time #timer').html(time);

// 流程管理界面开始时间
$('.content_top #timer').html(time);

function bTime () {
    var data = new Date();
    var y = data.getFullYear();
    var m = data.getMonth() + 1;
    var t = data.getDate();
    var h = data.getHours();
    var min = data.getMinutes();
    var s = data.getSeconds();
    var time = y + '/' + m + '/' + t + " " + h + ":" + min + ":" + s;    
    return time;
}
var b_time = bTime();
$('#bottom_time #b_timer').html(b_time);
