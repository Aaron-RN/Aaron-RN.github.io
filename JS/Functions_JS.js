var AllBackgroundElements = new Array();
var AllBackgroundElements2 = new Array();
AllBackgroundElements = document.querySelectorAll(".dough");
AllBackgroundElements2 = document.querySelectorAll(".dough2");
var slideNumber = 1;
var maxSlideNumber = 3;
var Slide1 = 'url("Images/Individuals/HomeSauce_768px_text.jpeg")';
var Slide2 = 'url("Images/Individuals/HomeCheese_768px_text.jpg")';
var Slide3 = 'url("Images/Individuals/HomeDough_768px_text.jpg")';
var timerSwitch = 5000;

var loop = setInterval(function()
            {
                if(slideNumber==1)
                {
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
                //clearInterval(loop);
            }, timerSwitch);