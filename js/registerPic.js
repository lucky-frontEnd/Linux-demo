$(document).ready(function () {
    $('.register_pic').click(function (e) {
        $("#picPopup").css('display', 'block');
    });
    
    //点击(X)按钮,关闭图片弹窗
    $(".close").click(function () {
        $('#picPopup').css('display', 'none'); 
    });

    $(document).click(function () {
        
    });
});
