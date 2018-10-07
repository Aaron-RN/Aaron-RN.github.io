var PageBody = document.getElementsByTagName("body")[0];
var GalleryButton = document.getElementById("SwitchGallery");
if(GalleryButton){GalleryButton.addEventListener("click", function() {switchGallery()});}
var VideosGallery = document.getElementById("VideoGallery");
var PicturesGallery = document.getElementById("PictureGallery");
var trainingPage = new Array();
var hashLinks = new Array();
trainingPage = document.querySelectorAll("#navTraining");
hashLinks = document.querySelectorAll("a");


for(var i = 0; i < hashLinks.length; i++)
    {
        hashLinks[i].addEventListener("click", function(event) {scrollToPage(event, this)});
    }

var isScrolling = 0;

// Change style of navbar on scroll
window.onscroll = function() {scrollNavBars()};
function scrollNavBars() {
    var navbar = document.getElementById("NavBar");
    var navbarMail = document.getElementById("NavMailBar");
    var navbarTitle = document.getElementById("NavBarTitle");
    if(window.innerWidth >= 725 && window.innerWidth < 1024){
        var navbar = document.getElementById("NavBar2");
        var navbarMail = document.getElementById("NavMailBar2");
        var navbarTitle = document.getElementById("NavBarTitle2");
    }
    if(window.innerWidth < 725){
        var navbar = document.getElementById("NavBar3");
        var navbarMail = document.getElementById("NavMailBar3");
        var navbarTitle = document.getElementById("NavBarTitle3");
    }
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        navbar.className = "navMenu" + " w3-top" + " w3-theme-d33" + " w3-animate-top" + " dbg-orange";
        navbar.className = "navMenu" + " w3-top" + " w3-theme-d33" + " w3-animate-top" + " dbg-orange";
        navbarMail.className = "w3-bar" + " w3-theme-d44" + " dbg-yellow";
        navbar.style.position="fixed";
        navbar.style.top = "0";
        navbarTitle.style.display="none";
    } else {
        if(window.innerWidth < 725){
            navbar.className = navbar.className.replace("navMenu w3-top w3-theme-d3m w3-animate-top dbg-orange", "navMenu w3-top w3-theme-d3 dbg-orange");
        }
        else {
            if(PageBody.classList.contains('GalleryPage')){navbar.className = navbar.className.replace("navMenu w3-top w3-theme-d33 w3-animate-top dbg-orange", "navMenu w3-top w3-theme-d5 dbg-orange");}
            else{navbar.className = navbar.className.replace("navMenu w3-top w3-theme-d33 w3-animate-top dbg-orange", "navMenu w3-top w3-theme-d3 dbg-orange");}
        }
        navbarMail.className = navbarMail.className.replace("w3-bar w3-theme-d44 dbg-yellow", "w3-bar w3-theme-d4 dbg-yellow");
        navbar.style.position="absolute";
        //navbar.style.top = "-41em";
        navbarTitle.style.display="block";
    }
}

function scrollToPage(e, elmnt) {
    // Make sure this.hash has a value before overriding default behavior
    //alert(elmnt.getAttribute("data-page-link"))
    if(elmnt.getAttribute("data-page-link")){break;}
    if (elmnt.hash !== "") {
      // Prevent default anchor click behavior
        event.preventDefault();

      // Store hash
        var hash = elmnt.hash;
        //alert(hash);

        if(isScrolling) return;
        isScrolling = 1;
        var scrollSpeed = 15;
        var pageSelected = document.querySelector(hash);
        var scrollToPos = pageSelected.offsetTop;
        var scrolledDistance = 0;
        var scrollDifference;
        var scrollDirection;
        if(scrollToPos > document.body.scrollTop || scrollToPos > document.documentElement.scrollTop)
            {
                scrollDirection = 1; //Scroll downwards
                scrollDifference = scrollToPos - (document.body.scrollTop + document.documentElement.scrollTop);
            }
        if(scrollToPos < document.body.scrollTop || scrollToPos < document.documentElement.scrollTop)
            {
                scrollDirection = -1; //Scroll upwards
                scrollDifference = (document.body.scrollTop + document.documentElement.scrollTop) - scrollToPos; 
            }
        //alert(scrollToPos + " , " + document.body.scrollTop + "/" + document.documentElement.scrollTop);
        var id = setInterval(frame, 5);
        function frame() {
            if (scrolledDistance >= scrollDifference) {
                    //alert("Scroll Done: " + scrolledDistance + " out of " + scrollToPos +"Window.ScrollTop: " + document.documentElement.scrollTop +" Scroll Difference: " + scrollDifference);
                window.location.hash = hash;
                isScrolling = 0;
                clearInterval(id);
            }  
            else {
                scrolledDistance += scrollSpeed;
                window.scrollBy(0 , scrollSpeed * scrollDirection);
            }
        }
        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
    }
    //alert(pageSelected);
    //alert(window.innerWidth + " x " + window.innerHeight);
}

function showMore(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

function switchGallery(){
    VideosGallery.classList.toggle("w3-hide");
    PicturesGallery.classList.toggle("w3-hide");
    GalleryButton.classList.toggle("w3-animate-opacity");
    if(VideosGallery.classList.contains('w3-hide')){GalleryButton.innerHTML="Stills";}
    else{GalleryButton.innerHTML="Videos";}
}

/*Gallery Page Functions*/
function ShowImageModal(img_src){
    document.getElementById('ImgModal').style.display='block';
    document.getElementById('ImgModalSrc').src=img_src;
}

/*Sponsor Page Modal*/
function ShowSponsorModal(){
    document.getElementById('SponsorModal').style.display='block';
}