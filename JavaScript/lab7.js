function delSlad(id) {
    setTimeout(function () {
        document.getElementById(id).style.opacity = "0.8";
    }, 400);
    setTimeout(function () {
        document.getElementById(id).style.opacity = "0.6";
    }, 400);
    setTimeout(function () {
        document.getElementById(id).style.opacity = "0.4";
    }, 400);
    setTimeout(function () {
        document.getElementById(id).style.opacity = "0.2";
    }, 400);

    function call(callback) {
        callback()
    }
    
function al() {
    if (ulul_count === 0) {
        ulul.append('Сладости кончились')
    }
}
    setTimeout(function () {
        document.getElementById(id).remove()
        let ulul = document.getElementById('ulul');
        ulul_count = ulul.children.length
        call(al)
    }, 1000);
}    