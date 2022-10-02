function handler_over(event) {
    if (event.type === 'mouseover') {
        for (let i = 0; (i < 10) && (0 <= opa <= 1); i++) {
            setTimeout(function () {
                opa = opa - 0.1
                event.target.style.opacity = String(opa)
            }, 200 + i * 100);
        }
    }
}

function handler_out(event) {
    if (event.type === 'mouseout') {
        for (let i = 0; (i < 10) && (0 <= opa <= 1); i++) {
            setTimeout(function () {
                opa = opa + 0.1
                event.target.style.opacity = String(opa)
            }, 400 + i * 100);
        }
    }
}


var opa = 1

gifka.onmouseover = handler_over;
gifka.onmouseout = handler_out;