let div = document.createElement('div');
div.className = 'demo'

document.body.appendChild(div);

var dragging = false

var lastX
var lastY  //定义变量存储鼠标移动后的前一次位置坐标
div.onmousedown = function(e){
    lastX = e.clientX
    lastY = e.clientY
    //鼠标首次点击时，div的位置不变，且记录鼠标点击的坐标（即记录鼠标第一下点击时在div上的位置）
    dragging = true
}

div.onmousemove = function(e) {
// ↑  这里使用document而不用document.body和div，是防止body定义过小或者鼠标移动过快时，光标脱离div导致div无法移动
    if (dragging === true) {
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY  //div应该移动的距离（鼠标移动距离） = 鼠标此时的位置 - 鼠标上一个点的位置
        var top = parseInt(div.style.top) || 0  //防止div.style.top出现意外值，比如auto或空值
        var left = parseInt(div.style.left) || 0
        div.style.top = top + deltaY + 'px'
        div.style.left = left + deltaX + 'px'  //div的此时位置 = div的上一个位置 + 应该移动的距离 + “单位”
        lastX = e.clientX
        lastY = e.clientY  //更新鼠标上一个点的位置
    }
}

div.onmouseup = function() {
    dragging = false
}
