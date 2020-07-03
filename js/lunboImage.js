// 轮播图功能
$(document).ready(function () {
    //设置变量速度为3秒
    var speed = 3000;
    //循环变量为1，是避免定时器再等第一章图片
    var m = 1;
    //设置定时器的函数和时间
    var playTimer = setInterval(runPlay, speed);
    //定时函数
    function runPlay() {
        //判读如果m大于4，就设置m=0
        if (m > 4) {
            m = 0;
        }
        //调用controlPlay函数来控制图片变化
        controlPlay(m);
        m++;
    }
    //通过参数控制图片的变化,图标变化
    function controlPlay(n) {
        $("#imgList a").removeClass("current").eq(n).addClass("current");
        $("ul li").removeClass("current").eq(n).addClass("current");
    }
    //给整个轮播图绑定鼠标事件，当鼠标放到轮播图上停止轮播图，当鼠标离开轮播图继续滚动
    $("#playBox").mouseenter(function () {
        //停止定时
        clearInterval(playTimer);
        //左右控制按钮显示
        $(".sliderbar").fadeIn(300);
    }).mouseleave(function () {
        //重新开始定时
        playTimer = setInterval(runPlay, speed);
        //左右控制按钮隐藏
        $(".sliderbar").fadeOut(300);
    });
    //给li绑定控制图标绑定单击事件
    $("ul li").click(function () {
        controlPlay($(this).index());
        //鼠标点击过后修改m的值
        m = $(this).index() + 1;
    }).hover(function () {
        //给li取消鼠标悬停的冒泡
        return false;
    })
    //给左右的控制图标取消 鼠标悬停的冒泡
    $(".sliderbar").hover(function () {
        return false;
    })
    //下一张图片
    $(".slidebar-right").click(function () {
        //判断m的值
        if (m > 4) {
            m = 0;
        }
        //显示下一站图片
        controlPlay(m);
        m++;
    })
    //上一张图片
    $(".slidebar-left").click(function () {
        //m默认显示下一张，所以为了显示上一张，m必须减2
        m -= 2;
        if (m < 0) {
            m = 4;
        }
        //显示上一张图片
        controlPlay(m);
        //保证m要显示下一张
        m++;
    })
});