onload = function () {
    var year = new Date().getFullYear(); //获取当前年份

    var timer = document.getElementById('timer');//获取timerect下拉列表
    for (var i = 2008; i < year + 5; i++)//循环添加2008到当前年份加5年的每个年份依次添加到下拉列表
    {
        var option = document.createElement('option');
        option.value = i;
        var txt = document.createTextNode(i);
        option.appendChild(txt);
        timer.appendChild(option);
    }
}