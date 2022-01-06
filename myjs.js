// xây dựng hàm xử lí phím
function upArrowPressed(){
    let element = document.getElementById("nobita")
    element.style.top = parseInt(element.style.top) - 5 + "px";
}
function downArrowPressed(){
    var element = document.getElementById("nobita")
    element.style.top = parseInt(element.style.top) + 5 + "px";
}
function leftArrowPressed(){
    var element = document.getElementById("nobita")
    element.style.left = parseInt(element.style.left) - 5 + "px";
}
function rightArrowPressed(){
    var element = document.getElementById("nobita")
    element.style.left = parseInt(element.style.left) + 5 + "px";
}
//xây dựng hàm nhận phím
function moveSlection(evt){
    switch (evt.keyCode){
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
// xây dựng hàm doReady
function doReady(){
    window.addEventListener('keydown', moveSlection);
}

