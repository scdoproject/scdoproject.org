// 导航栏自动展开
$(document).ready(function () {
    $(".active").mouseover(function () {
        $(".dropdown").removeClass("open");
        $(this).addClass("open");
        // 采用单例模式
        var objs = document.getElementsByClassName("dropdown open");
        if (objs.length > 1) {
            for (var i = 0; i < objs.length; i++) {
                console.log(objs[i]);
                if (objs[i] !== this) {
                    var classAtr = objs[i].getAttribute("class");
                    var newClass = classAtr.replace("open", "");
                    objs[i].setAttribute("class", newClass);
                }
            }
        }
    });
    // 自动展开
    $(".dropdown").mouseover(function () {
        $(".active").removeClass("open");
        // $(".active").removeClass("active");
        $(this).addClass("open");
        // 采用单例模式
        var objs = document.getElementsByClassName("dropdown open");
        if (objs.length > 1) {
            for (var i = 0; i < objs.length; i++) {
                console.log(objs[i]);
                if (objs[i] !== this) {
                    var classAtr = objs[i].getAttribute("class");
                    var newClass = classAtr.replace("open", "");
                    objs[i].setAttribute("class", newClass);
                }
            }
        }
    });

    $(".dropdown-menu").mouseout(function () {
        //setTimeout("closeMenu()", 5000)
        closeMenu();

    });
});

// 关闭菜单
function closeMenu() {
    $(".dropdown").removeClass("open");
    $(".active").removeClass("open");

}