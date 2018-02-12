$(document).ready(function () {
    $(".button-collapse").sideNav();    // 移动端侧边栏
    $('pre codeblock').each(function (i, block) {
        hljs.highlightBlock(block);
    });
    autoHeight();
    showMessage();
});

$(document).resize(autoHeight());
hljs.configure({
    useBR: false
});

//确保 jquery 加载完成
$(document).ready(function () {
    $(document).on('click', '.fold_hider', function () {
        $('>.fold', this.parentNode).slideToggle();
        $('>:first', this).toggleClass('open');
    });
    //默认情况下折叠
    $("div.fold").css("display", "none");
});

/* 自适应高度 */
function autoHeight() {
    $("main").attr("style", "min-height:" + (document.documentElement.clientHeight - $("header").height() - $("footer").height() - 40) + "px;");
}

window.onload = function () {
    autoHeight();
};
window.onresize = function () {
    autoHeight();
};


function fetchData(url, solve, idx) {
    fetch(url).then(
        response => response.json()
    ).then(
        data => solve(data, idx)
    ).catch(
        e => console.log("Oops, error:" + e)
    );
}



function showMessage() {
    $("body").prepend("<div id='attitionMessage' class='center pink darken-3 white-text'>博客从Hexo迁移到<a class='blue-text text-lighten-2' href='https://github.com/OhYee/OBlog'>自己写的系统</a>，如果访问遇到问题，请反馈到<a class='blue-text text-lighten-2' href='mailto:oyohyee@oyohyee.com'>oyohyee@oyohyee.com</a>，或者在评论区与GitHub issue留言。<br>如果个别内容无法正常渲染，访问老站点<a class='blue-text text-lighten-2' href='http://blog.oyohyee.com/'>http://blog.oyohyee.com</a> <a class='white-text right' href='javascript:removeMessage();'><i class='material-icons left'>close</i></a></div>");
}
function removeMessage() {
    $('#attitionMessage').remove();
}


var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?c3c4a93be88257973d97af02f735ed4e";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

// function getAttr() {
//     console.log("getAttr ", arguments);
//     if (arguments.length == 2) {
//         return arguments[0].getAttribute(arguments[1]);
//     } else {
//         arguments[0].setAttribute(arguments[1], arguments[2]);
//         return arguments[0];
//     }
// }

// function getHtml() {
//     console.log("getHTML ", arguments);
//     if (arguments.length == 1) {
//         return arguments[0].innerHTML;
//     } else {
//         arguments[0].innerHTML = arguments[1];
//         return arguments[0];
//     }
// }

// function getElement(strExpr) {
//     console.log("getElement:", strExpr);
//     var idExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
//     var classExpr = /^(?:\s*(<[\w\W]+>)[^>]*|.([\w-]*))$/;
//     if (idExpr.test(strExpr)) {
//         var idMatch = idExpr.exec(strExpr);
//         return document.getElementById(idMatch[2]);
//     } else if (classExpr.test(strExpr)) {
//         var classMatch = classExpr.exec(strExpr);
//         var allElement = document.getElementsByTagName("*");
//         var ClassMatch = [];
//         for (var i = 0, l = allElement.length; i < l; i++) {
//             if (allElement[i].className.match(new RegExp("(\\s|^)" + classMatch[2] + "(\\s|$)"))) {
//                 ClassMatch.push(allElement[i]);
//             }
//         }
//         return ClassMatch;
//     }
// }





/*
window.onload = function() {
    getElement(".truncate").forEach(function(e) {
        var content = getHtml(e);
        console.log(content);
        var length = getAttr(e, "length");
        if (!length)
            length = 5
        if (content.length > length) {
            content = content.replace(/\s/g, "").substr(0, length);
            getHtml(e, content + "...");
        }
    });

    getElement(".progress").forEach(function(e) {
        if (getAttr(e, "pre")) {
            var pre1 = pre2 = getAttr(e, "pre");
            console.log(pre1)
            if (pre1 > 100)
                pre1 = 100;
        } else {
            var fz = getAttr(e, "fz");
            var fm = getAttr(e, "fm");
            console.log(fz, fm)
            var pre1 = pre2 = fz / fm * 100;
            if (pre1 > 100)
                pre1 = 100;
        }
        getHtml(e, "<span class='green' style='width:" + pre1 + "%;'><span>" + pre2 + "%</span></span>");
    });
}
*/

// document.body.style.background = "url{'"+document.getElementsByClassName('particles-js-canvas-el')[0]+"')";



// particlesJS("particles", {
//     "particles": {
//         "number": {
//             "value": 30, // 数量
//             "density": {
//                 "enable": false,
//                 "value_area": 800 // 区域散布密度大小
//             }
//         },
//         "color": {
//             "value": "#ccc" // 原子的颜色 
//                 // "#b61924" 
//                 // {r:182, g:25, b:36} 
//                 // {h:356, s:76, l:41} 
//                 // ["#b61924", "#333333", "999999"] 
//                 // "random"
//         },
//         "shape": {
//             "type": "circle", // 原子的形状 
//             // "circle" 
//             // "edge" 
//             // "triangle" 
//             // "polygon" 
//             // "star" 
//             // "image" 
//             // ["circle", "triangle", "image"]
//             "stroke": {
//                 "width": 0, // 描边宽度
//                 "color": "#000000" // 原子颜色
//             },
//             "polygon": {
//                 "nb_sides": 5 // 原子的多边形边数
//             },
//             "image": {
//                 "src": "img/github.svg", // 原子的图片
//                 "width": 100, // 图片宽度
//                 "height": 100 // 图片高度
//             }
//         },
//         "opacity": {
//             "value": 0.5, // 不透明度
//             "random": true, // 随机不透明度
//             "anim": {
//                 "enable": true, // 渐变动画
//                 "speed": 0.1, // 渐变动画速度
//                 "opacity_min": 0.3, // 渐变动画不透明度
//                 "sync": true
//             }
//         },
//         "size": {
//             "value": 10, // 原子大小
//             "random": true, // 原子大小随机
//             "anim": {
//                 "enable": true, // 原子渐变	
//                 "speed": 5, // 原子渐变速度
//                 "size_min": 0.1,
//                 "sync": true
//             }
//         },
//         "line_linked": {
//             "enable": true, // 连接线
//             "distance": 300, // 连接线距离
//             "color": "#ccc", // 连接线颜色
//             "opacity": 0.5, // 连接线不透明度
//             "width": 2 // 连接线的宽度
//         },
//         "move": {
//             "enable": true, // 原子移动
//             "speed": 5, // 原子移动速度
//             "direction": "none", // 原子移动方向
//             // "none" 
//             // "top" 
//             // "top-right" 
//             // "right" 
//             // "bottom-right" 
//             // "bottom" 
//             // "bottom-left" 
//             // "left" 
//             // "top-left"
//             "random": true, // 移动随机方向
//             "straight": false, // 直接移动
//             "out_mode": "out", // 是否移动出画布 "out" "bounce"
//             "bounce": false, // 是否跳动移动
//             "attract": {
//                 "enable": true, // 原子之间吸引
//                 "rotateX": 600, // 原子之间吸引X水平距离
//                 "rotateY": 600 // 原子之间吸引Y水平距离
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas", // 原子之间互动检测 "canvas", "window"
//         "events": {
//             "onhover": {
//                 "enable": true, // 悬停
//                 "mode": "grab" // 悬停模式 
//                     // "grab"     抓取临近的
//                     // "bubble"  泡沫球效果
//                     // "repulse"  击退效果
//                     // ["grab", "bubble"]
//             },
//             "onclick": {
//                 "enable": true, // 点击效果
//                 "mode": "push" // 点击效果模式
//                     // "push" 
//                     // "remove" 
//                     // "bubble" 
//                     // "repulse" 
//                     // ["push", "repulse"]
//             },
//             "resize": true // 互动事件调整
//         },
//         "modes": {
//             "grab": {
//                 "distance": 300, // 原子互动抓取距离
//                 "line_linked": {
//                     "opacity": 0.5 // 原子互动抓取距离连线不透明度
//                 }
//             },
//             "bubble": {
//                 "distance": 200, // 原子抓取泡沫效果之间的距离
//                 "size": 30, // 原子抓取泡沫效果之间的大小
//                 "duration": 2, // 原子抓取泡沫效果之间的持续事件
//                 "opacity": 0.5, // 击退效果距离
//                 "speed": 3 // 击退效果持续事件
//             },
//             "repulse": {
//                 "distance": 200,
//                 "duration": 0.1
//             },
//             "push": {
//                 "particles_nb": 3 // 粒子推出的数量
//             },
//             "remove": {
//                 "particles_nb": 2
//             }
//         }
//     },
//     "retina_detect": true
// });