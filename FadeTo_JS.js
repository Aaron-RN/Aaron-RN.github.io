
//document.getElementById("FadeTo-Btn").onclick = function() {FadeTo("FadeTo-Example")};


function FadeTo(element){
	var time = document.getElementById("FT-time").value;
	var transparency = document.getElementById("FT-opacity").value;
	var E = document.getElementById(element);
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
		if(direction!="Up"&&direction!="Down"){clearinterval(timer);}
		if(direction == "Up"){
			if(oString  >= transparency){
				//E.innerHTML=E.style.opacity+"Done Up";
				direction=null;
			}
			else{
				oString += 0.01;
				E.style.opacity = oString.toString();
				//E.innerHTML=E.style.opacity;
			}
		}
		if(direction == "Down"){			
			if(oString  <= transparency){
				//E.innerHTML=E.style.opacity+"Done Down";
				direction=null;
			}
			else{
				oString -= 0.01;
				E.style.opacity = oString.toString();
				//E.innerHTML=E.style.opacity;
                        }
		}
	}
}
//FadeTo("animate", 3, 0.5);
