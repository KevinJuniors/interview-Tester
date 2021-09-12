var id = null;

function ballMove() {
    var elem = document.getElementById("jsAni");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    
    function frame() {
        if (pos === 500) {
            clearInterval(id);
        } else {
            pos++;
                elem.style.top = pos + "px";
                elem.style.right = pos + "px";
        }
    }
}