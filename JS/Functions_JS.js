
function ScrollToBottom()
{
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
}

/*About Page Functions*/
function BodyOnload(){
    openTabDefault("Who");
}
function openTab(evt, Element_id) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-border-sky-blue w3-text-sky-blue w3-dark-grey", "");
    }
    document.getElementById(Element_id).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-border-sky-blue w3-text-sky-blue w3-dark-grey";
}

function openTabDefault(Element_id) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-border-sky-blue w3-text-sky-blue w3-dark-grey", "");
    }
    document.getElementById("Who").style.display = "block";
    document.getElementById("WhoTab").className += " w3-border-sky-blue w3-text-sky-blue w3-dark-grey";
    document.getElementById("MWho").style.display = "block";
    document.getElementById("MWhoTab").className += " w3-border-sky-blue w3-text-sky-blue w3-dark-grey";
}

/*Portfolio Page Functions*/
function ShowImageModal_Landscape(img_src){
    document.getElementById('ImgModal-landscape').style.display='block';
    document.getElementById('ImgModalSrc-landscape').src=img_src;
}
function ShowImageModal_Portrait(img_src){
    document.getElementById('ImgModal-portrait').style.display='block';
    document.getElementById('ImgModalSrc-portrait').src=img_src;
}