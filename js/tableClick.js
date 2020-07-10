// 流程管理页面表格点击显示样式
$(function () {
    
    $('.t_clicks').click(function () {
        $('.d_clicks').removeClass('table_current');
        $(this).siblings().removeClass('table_current');
        $(this).toggleClass('table_current');
    })

    $('.d_clicks').click(function () {
        $('.t_clicks').removeClass('table_current');
        $(this).siblings().removeClass('table_current');
        $(this).toggleClass('table_current');
    })    
})