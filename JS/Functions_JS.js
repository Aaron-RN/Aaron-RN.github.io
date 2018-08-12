var AllBackgroundElements = new Array();
var AllBackgroundElements2 = new Array();
AllBackgroundElements = document.querySelectorAll(".dough");
AllBackgroundElements2 = document.querySelectorAll(".dough2");

var SliderLabels1 = new Array();
var SliderLabels2 = new Array();
var SliderLabels3 = new Array();
SliderLabels1 = document.querySelectorAll(".sliderLabel1");
SliderLabels2 = document.querySelectorAll(".sliderLabel2");
SliderLabels3 = document.querySelectorAll(".sliderLabel3");
var SliderLabelInActive = "rgba(200,50,50,0.3)";
var SliderLabelActive = "rgba(235,50,50,0.8)";

var slideNumber = 1;
var maxSlideNumber = 3;
var Slide1;
var Slide2;
var Slide3;
SetSliderImages();
for(var i = 0;i < AllBackgroundElements.length; i++)
    {
        AllBackgroundElements[i].style.backgroundImage=Slide1;
        AllBackgroundElements2[i].style.backgroundImage=Slide1;
    }
var timerSwitch = 5000;
var loop = setInterval(function(){ChangeSlide();}, timerSwitch);

for(var i = 0; i < SliderLabels1.length; i++)
    {
        SliderLabels1[i].addEventListener("click", function(e) {SelectSlide(e)});
        SliderLabels2[i].addEventListener("click", function(e) {SelectSlide(e)});
        SliderLabels3[i].addEventListener("click", function(e) {SelectSlide(e)});
    }

function SetSliderImages()
{
    if(window.innerWidth<=899){
    Slide1 = 'url("Images/Individuals/HomeSauce_768px_text.jpeg")';
    Slide2 = 'url("Images/Individuals/HomeCheese_768px_text.jpg")';
    Slide3 = 'url("Images/Individuals/HomeDough_768px_text.jpg")';
    }

    if(window.innerWidth>899){
    Slide1 = 'url("Images/Individuals/HomeSauce_1920px_text.jpeg")';
    Slide2 = 'url("Images/Individuals/HomeCheese_1920px_text.jpg")';
    Slide3 = 'url("Images/Individuals/HomeDough_1920px_text.jpg")';
    }
}
function SelectSlide(e)
{
    var targetElement = e.target;
    clearInterval(loop);
    //alert(targetElement.classList.contains("sliderLabel1"));
    if(targetElement.classList.contains("sliderLabel1")){slideNumber = maxSlideNumber; ChangeSlide();}
    if(targetElement.classList.contains("sliderLabel2")){slideNumber = 1; ChangeSlide();}
    if(targetElement.classList.contains("sliderLabel3")){slideNumber = 2; ChangeSlide();}
    loop = setInterval(function(){ChangeSlide();}, timerSwitch);
}
function ChangeSlide()
{
    if(slideNumber==1)
        {
            for(var i = 0;i < SliderLabels1.length; i++)
                {
                    SliderLabels1[i].style.backgroundColor=SliderLabelInActive;
                    SliderLabels2[i].style.backgroundColor=SliderLabelActive;
                    SliderLabels3[i].style.backgroundColor=SliderLabelInActive;
                }
            for(var i = 0;i < AllBackgroundElements.length; i++)
                {
                    AllBackgroundElements[i].style.backgroundImage=Slide2;
                    AllBackgroundElements2[i].style.backgroundImage=Slide2;
                    //alert(window.getComputedStyle(AllBackgroundElements[i]).getPropertyValue("display"));
                    if(window.getComputedStyle(AllBackgroundElements[i]).getPropertyValue("display")=="none")
                    {AllBackgroundElements[i].style.display="initial";AllBackgroundElements2[i].style.display="none";}
                    else                       {AllBackgroundElements[i].style.display="none";AllBackgroundElements2[i].style.display="initial";}
                    //alert(AllBackgroundElements[i].style.backgroundImage);
                }
        }
    if(slideNumber==2)
        {
            for(var i = 0;i < SliderLabels1.length; i++)
                {
                    SliderLabels1[i].style.backgroundColor=SliderLabelInActive;
                    SliderLabels2[i].style.backgroundColor=SliderLabelInActive;
                    SliderLabels3[i].style.backgroundColor=SliderLabelActive;
                }
            for(var i = 0;i < AllBackgroundElements.length; i++)
                {
                    AllBackgroundElements[i].style.backgroundImage=Slide3;
                    AllBackgroundElements2[i].style.backgroundImage=Slide3;
                    if(window.getComputedStyle(AllBackgroundElements[i]).getPropertyValue("display")=="none")
                    {AllBackgroundElements[i].style.display="initial";AllBackgroundElements2[i].style.display="none";}
                    else                       {AllBackgroundElements[i].style.display="none";AllBackgroundElements2[i].style.display="initial";}
                }
        }
    if(slideNumber==3)
        {
            for(var i = 0;i < SliderLabels1.length; i++)
                {
                    SliderLabels1[i].style.backgroundColor=SliderLabelActive;
                    SliderLabels2[i].style.backgroundColor=SliderLabelInActive;
                    SliderLabels3[i].style.backgroundColor=SliderLabelInActive;
                }
            for(var i = 0;i < AllBackgroundElements.length; i++)
                {
                    AllBackgroundElements[i].style.backgroundImage=Slide1;
                    AllBackgroundElements2[i].style.backgroundImage=Slide1;
                    if(window.getComputedStyle(AllBackgroundElements[i]).getPropertyValue("display")=="none")
                    {AllBackgroundElements[i].style.display="initial";AllBackgroundElements2[i].style.display="none";}
                    else                       {AllBackgroundElements[i].style.display="none";AllBackgroundElements2[i].style.display="initial";}
                }
        }
    slideNumber++;
    if(slideNumber>maxSlideNumber){slideNumber=1;}   
}
