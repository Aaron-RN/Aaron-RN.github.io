var dropButtons = new Array();
dropButtons = document.querySelectorAll(".DropButton");
var dropBoxes = new Array();
dropBoxes = document.querySelectorAll(".DropBox");

for(var i = 0; i < dropButtons.length; i++)
    {
        dropButtons[i].addEventListener("click", function(e) {DropMenuToggle(e)});
        dropBoxes[i].addEventListener("click", function(e) {DropMenuClose(e)});
        dropBoxes[i].addEventListener("blur", function(e) {DropMenuClose(e)});
        dropBoxes[i].addEventListener("mouseleave", function(e) {DropMenuClose(e)});
//        dropButtons[i].addEventListener("mouseover", function(e) {DropMenuOpen(e)});
//        dropButtons[i].addEventListener("mouseleave", function(e) {DropMenuClose(e)});
    }

function DropMenuToggle(e) {
    //var x = e.target;
    for(var x = 0; x<dropBoxes.length;x++){
        if (dropBoxes[x].className.indexOf("w3-show") == -1) {
            dropBoxes[x].className += " w3-show";
        } 
        else { 
             dropBoxes[x].className = dropBoxes[x].className.replace(" w3-show", "");
        }
    }
}
function DropMenuOpen(e) {
    //var x = e.target;
    for(var x = 0; x<dropBoxes.length;x++){
        if (dropBoxes[x].className.indexOf("w3-show") == -1) {
            dropBoxes[x].className += " w3-show";
        } 
    }
}
function DropMenuClose(e) {
    //var x = e.target;
    for(var x = 0; x<dropBoxes.length;x++){
        dropBoxes[x].className = dropBoxes[x].className.replace(" w3-show", "");
    }
}
