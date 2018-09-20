var trainingPage = new Array();
trainingPage = document.querySelectorAll("#navTraining");


for(var i = 0; i < trainingPage.length; i++)
    {
        trainingPage[i].addEventListener("click", function() {scrollToPage("Training")});
    }

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
        navbarMail.className = "w3-bar" + " w3-theme-d44" + " dbg-yellow";
        navbar.style.position="fixed";
        navbar.style.top = "0";
        navbarTitle.style.display="none";
    } else {
        if(window.innerWidth < 725){
            navbar.className = navbar.className.replace("navMenu w3-top w3-theme-d3m w3-animate-top dbg-orange", "navMenu w3-top w3-theme-d3 dbg-orange");
        }
        else {navbar.className = navbar.className.replace("navMenu w3-top w3-theme-d33 w3-animate-top dbg-orange", "navMenu w3-top w3-theme-d3 dbg-orange");
        }
        navbarMail.className = navbarMail.className.replace("w3-bar w3-theme-d44 dbg-yellow", "w3-bar w3-theme-d4 dbg-yellow");
        navbar.style.position="absolute";
        //navbar.style.top = "-41em";
        navbarTitle.style.display="block";
    }
}

function scrollToPage(pageSelected) {
    //alert(pageSelected);
    alert(window.innerWidth + " x " + window.innerHeight);
    var scrollSpeed = 1;
    var pageSelected = document.getElementById(pageSelected);
    var scrollToPos = pageSelected.offsetTop;
    var scrolledDistance = 0;
    //alert(scrollToPos + " , " + document.body.scrollTop + "/" + document.documentElement.scrollTop);

    while (scrolledDistance < scrollToPos) {
        //document.body.scrollTop += scrollSpeed;
        //document.documentElement.scrollTop += scrollSpeed;
        window.scrollBy(0 , scrollSpeed);
        scrolledDistance += scrollSpeed;
    }  
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