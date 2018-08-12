var dropButtons = new Array();
dropButtons = document.querySelectorAll(".DropButton");
var dropBoxes = new Array();
dropBoxes = document.querySelectorAll(".DropBox");

for(var i = 0; i < dropButtons.length; i++)
    {
        dropButtons[i].addEventListener("click", function(e) {DropMenu(e)});
    }
function DropMenu(e) {
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