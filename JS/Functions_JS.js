window.page = document.querySelector("body");
window.onload = function(){
    page.className = page.className.replace("preload","");
};

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
        tablinks[i].className = tablinks[i].className.replace(" w3-border-sky-blue w3-text-sky-blue w3-dark-grey text-shadow", "");
    }
    document.getElementById(Element_id).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-border-sky-blue w3-text-sky-blue w3-dark-grey text-shadow";
}

function openTabDefault(Element_id) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-border-sky-blue w3-text-sky-blue w3-dark-grey text-shadow", "");
    }
    document.getElementById("Who").style.display = "block";
    document.getElementById("WhoTab").className += " w3-border-sky-blue w3-text-sky-blue w3-dark-grey text-shadow";
    document.getElementById("MWho").style.display = "block";
    document.getElementById("MWhoTab").className += " w3-border-sky-blue w3-text-sky-blue w3-dark-grey text-shadow";
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
function ShowImageModal(img_src){
    document.getElementById('ImgModal').style.display='block';
    document.getElementById('ImgModalSrc').src=img_src;
}

var PageLinks = document.querySelectorAll(".Link");
for(var i=0;i<PageLinks.length;i++){
    PageLinks[i].addEventListener("click",PageSlideLeft,false);
}

function PageSlideLeft(e, link)
{
    e.preventDefault();
    link = e.currentTarget.getAttribute("href");
    FadeTo("body",1,0);
    //page.className+=" PageSlideLeft";
    var i = 1;
    var loop = setInterval(function()
                {page.style.right=i + "%";
                 //console.log(page.style.right);
                 i+=1;
                 if(i>=100)
                 {window.location.href=link;clearInterval(loop);};
                }, 1);
}

function FadeTo(element,time,transparency){
	var E = document.querySelector(element);
        var Opac = window.getComputedStyle(E).getPropertyValue("opacity");
        if(E.style.opacity==0){E.style.opacity = Opac;}
	var direction;
	if(parseFloat(E.style.opacity)< transparency){
		direction = "Up";
	}
	else if(parseFloat(E.style.opacity)> transparency){
		direction = "Down";
	}
	else{
		return;
	}
	var oString = parseFloat(E.style.opacity);
	var timer= setInterval(fade, time);
	//timer = setInterval(fade, time);
	function fade(){
		//if(direction!="Up"&&direction!="Down"){clearinterval(timer);}
		if(direction == "Up"){
			if(oString  >= transparency){
				direction=null;
			}
			else{
				oString += 0.01;
				E.style.opacity = oString.toString();
			}
		}
		if(direction == "Down"){			
			if(oString  <= transparency){
				direction=null;
			}
			else{
				oString -= 0.01;
				E.style.opacity = oString.toString();
                        }
		}
	}
}
