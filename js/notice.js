// 点击列表切换公告
$(function () {
    function eleDelete () {
         $('.notice_title').empty();
         $(".notice_content").empty();
         $(".notice_bottom").empty();
    }
     $("#notice_1").click(function () {
         eleDelete();
         $(".notice_title").html("test code");
         $(".notice_content").html("test code");
         $(".notice_bottom").html("text code");
     });
     $("#notice_2").click(function () {
         eleDelete();
         $(".notice_title").html("test code1");
         $(".notice_content").html("test code1");
         $(".notice_bottom").html("text code1");
     })
 });