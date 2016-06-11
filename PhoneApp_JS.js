
//document.getElementById("FadeTo-Btn").onclick = function() {FadeTo("FadeTo-Example")};

function PhoneApp(element,select_element){
	var E = document.getElementById(element);//To Use later on to force a submit to server
	var E_val = document.getElementById(select_element).value;
	if(E_val=="Google Nexus"){
		document.getElementById("phone-img").src='http://i-cdn.phonearena.com/images/phonesize/6735-logo/Google-Nexus-4.jpg';
	}
	if(E_val=="Samsung S6"){
		document.getElementById("phone-img").src='http://www.samsung.com/global/galaxy/galaxys6/galaxy-s6-edge/images/galaxy-s6-edge_gallery_front_black.png';
	}
	if(E_val=="iPhone S6"){
		document.getElementById("phone-img").src='';//place image directory within ''
	}
	if(E_val=="iPhone S7"){
		document.getElementById("phone-img").src='';//place image directory within ''
	}
//this.form.submit()
}

