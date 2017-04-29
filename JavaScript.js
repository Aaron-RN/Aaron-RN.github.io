//Sounds
var snd_gui_open = new Audio('sounds/gui_open.wav');
var snd_fire = new Audio('sounds/fx_fire.ogg');
var snd_fire2 = new Audio('sounds/fx_fire2.ogg');
var snd_fire3 = new Audio('sounds/fx_fire3.ogg');
var snd_Hit = new Audio('sounds/fx_shipHit.wav');
var snd_Miss = new Audio('sounds/fx_splash.wav');
var snd_shipDestroyed = new Audio('sounds/fx_shipDestroyed.wav');
var snd_shipDestroyed2 = new Audio('sounds/fx_shipDestroyed2.wav');
var snd_reload = new Audio('sounds/fx_cannonReload.wav');

var snd_music_fail = new Audio('sounds/music_fail_trombone.wav');
var snd_music_fail2 = new Audio('sounds/music_fail_trombone2.wav');

//Main Variables Document Object
var Page = document.querySelector("body");
var Modal = document.querySelector(".aa-modal");
var ModalContent = document.querySelector(".aa-modal-content");
var PlayerConsole = document.querySelector(".playerConsole");
var EnemyConsole = document.querySelector(".enemyConsole");
var TopBoard = document.getElementById("Top");
var BottomBoard = document.getElementById("Bottom");
var ShipsCounter = document.getElementById("ShipCounter");
var Menu = document.getElementById("MenuContainer");
var EntireBoard = document.getElementById("WholeBoard");
//var PlayerCannon = document.getElementById("playerCannon");
//var EnemyCannon = document.getElementById("enemyCannon");
var boardSize = 100;//Allows for 100 tiles per grid
var GameStarted = false;
var gameOver = false;
var TurnsTaken = 0;
var ShowEnemyPosition = false;
var WhosTurn = "Enemy";
//SwitchTurns();

var cpuActive = false;
var numOfEnemies = 5;//Number of Enemy/Player Ships - Max = boardSize / number of Contiguous Ship Parts
var enemiesDestroyed = 0;
ShipsCounter.innerHTML = "Ships Destroyed: "+enemiesDestroyed+"/"+numOfEnemies;
var playersDestroyed = 0;
var possibleEnemyPositions;
var possiblePlayerPositions;
var enemyPositions = new Array();
var playerPositions = new Array();
var enemyTiles = new Array();
var playerTiles = new Array();

var tilesAlreadyHit = new Array();
var targetList = new Array();
for(var i=1;i<101;i++)
    {
        var newTile = document.createElement("div");
        var ship = new Ship(newTile, 1);
        enemyTiles.push(ship);//enemyTiles.push(newTile);
        //console.log(enemyTiles[i-1].objRef);//Debug Purposes
        newTile.classList.add("tile","enemy");
        newTile.innerHTML="<span class='tileText'>"+i+"</span>";
        TopBoard.appendChild(newTile);
    }

for(var i=1;i<101;i++)
    {
        var newTile = document.createElement("div");
        var ship = new Ship(newTile, 1);
        playerTiles.push(ship);
        //console.log(playerTiles[i].textContent);
        newTile.classList.add("tile","player");
        newTile.innerHTML="<span class='tileText'>"+i+"</span>";
        BottomBoard.appendChild(newTile);
    }

if(enemyTiles.length==100&&playerTiles.length==100)
    {
        for (var i=0; i < enemyTiles.length; i++) {
            enemyTiles[i].objRef.addEventListener("click", function(){SelectTile(event,enemyPositions);}, false);
        }
        //Start();
    }

var menuOptions = document.getElementsByClassName("menuOption");
for (var i=0; i < menuOptions.length; i++) {
    menuOptions[i].addEventListener("click", function(){MenuClick(event);}, false);
    }


function MenuClick(e)
{
    var OptionSelected = e.currentTarget;
    if(!GameStarted){
        if(OptionSelected.id=="ShowAll"){
            ShowEnemyPosition=!ShowEnemyPosition;
            OptionSelected.textContent = "Reveal Enemies ("+ShowEnemyPosition+")";
        }
        if(OptionSelected.id=="Enemies"){
            var number = prompt("How many enemies do you want on board? (Less than 50)", "5");
            numOfEnemies=parseFloat(number);
            if(numOfEnemies>50){numOfEnemies=50;}
            if(numOfEnemies<=0){numOfEnemies=1;}
            if(isNaN(numOfEnemies)){numOfEnemies=5;}
            OptionSelected.textContent = "Number of Enemies ("+numOfEnemies+")";
            ShipsCounter.innerHTML = "Ships Destroyed: "+enemiesDestroyed+"/"+numOfEnemies;
        }
        if(OptionSelected.id=="StartGame"){
            Menu.style.display="none";
            EntireBoard.style.display="initial";
            SwitchTurns();
            Start();
        }
    }
}
function Ship(objRef,hp, pos2, pos3, pos4, pos5, destroyed)
{
    this.objRef = objRef;//Linked html document object
    this.hp = hp;//Health points of ship (The amount of hits it can take before being destroyed)
    this.pos2 = pos2;//Reference to a possible second position (HTML Div Object)
    this.pos3 = pos3;//Reference to a possible second position (HTML Div Object)
    this.pos4 = pos4;//Reference to a possible second position (HTML Div Object)
    this.pos5 = pos5;//Reference to a possible second position (HTML Div Object)
    this.destroyed = destroyed;//Reference to a possible second position (HTML Div Object)
    //All for the sake of contiguity
}
function ShipPart(ownerRef, objRef)
{
    this.ownerRef = ownerRef;
    this.objRef = objRef;
}

function Start()
{
    //Array starts at position 0. So the current values for min and max allows 100 possible tile positions
    var min = Math.ceil(0);
    var max = Math.floor(boardSize-1);
    possibleEnemyPositions = enemyTiles;
    possiblePlayerPositions = playerTiles;
    //alert(possibleEnemyPositions.length);//Debug Purposes
    rerollEnemy: while(enemyPositions.length<numOfEnemies){
        var tileNum = Math.floor(Math.random() * (max - min + 1)) + min;
        duplicateEnemy: for(var i=0;i<playerPositions.length;i++)//This loop runs if the same tile is added to the position list more than once
            {
                //Causes the tileNum var to reroll selecting a new tile
                if(playerPositions[i].objRef.textContent==tileNum+1){continue rerollEnemy;}
            }
        enemyPositions.push(possibleEnemyPositions[tileNum]);
        //console.log(enemyPositions.length);//Debug Purposes
        if(ShowEnemyPosition){possibleEnemyPositions[tileNum].objRef.style.backgroundColor="rgba(255,0,0,0.6)";}//Shows enemy position on board
        }
    rerollPlayer: while(playerPositions.length<numOfEnemies){
        var tileNum = Math.floor(Math.random() * (max - min + 1)) + min;
        //Debug Purposes
//        console.log("TileNUM")
//        console.log(tileNum)
//        console.log("Actual ships in list")
//        console.log(possiblePlayerPositions[tileNum])
        duplicatePlayer: for(var i=0;i<playerPositions.length;i++)//This loop runs if the same tile is added to the position list more than once
            {
                //Causes the tileNum var to reroll selecting a new tile
                if(playerPositions[i].objRef.textContent==tileNum+1){continue rerollPlayer;}
            }
        playerPositions.push(possiblePlayerPositions[tileNum]);
        //console.log(enemyPositions.length);//Debug Purposes
        possiblePlayerPositions[tileNum].objRef.style.backgroundColor="rgba(150,255,180,0.6)";
        }
    if(!ShowEnemyPosition){ContiguousSecondPos(enemyPositions,enemyTiles,"No");}
    if(ShowEnemyPosition){ContiguousSecondPos(enemyPositions,enemyTiles,"Yes");}
    ContiguousSecondPos(playerPositions,playerTiles,"Yes");
    GameStarted = true;
}

function SwitchTurns()
{
    if(WhosTurn=="Enemy")
        {
            TurnsTaken++
            //EnemyCannon.style.display="none";
            WhosTurn="Player";
            //PlayerCannon.style.display="block";
            Modal.classList.remove("fade","fade-5");
            Modal.classList.add("fade");
            Modal.style.display="block";
            ModalContent.innerHTML="<p class='glowText'>Round:"+TurnsTaken+"</p><p class='glowText'>Player's Turn<p>"
            var playPromise = snd_gui_open.play();
            if(playPromise!==undefined)
                {
                  playPromise.then(function() {
                    // Automatic playback started!
                  }).catch(function(error) {
                    // Automatic playback failed.
                    // Show a UI element to let the user manually start playback.
                  });
                }
            setTimeout(CloseModal, 2000);
            
            
        }
    else
    {
        //PlayerCannon.style.display="none";
        WhosTurn="Enemy";
        //EnemyCannon.style.display="block";
        Modal.classList.remove("fade","fade-5");
        Modal.classList.add("fade");
        Modal.style.display="block";
        ModalContent.innerHTML="<p class='glowText'>Round:"+TurnsTaken+"</p><p class='glowText'>Enemy's Turn<p>"
        var playPromise = snd_gui_open.play();
        if(playPromise!==undefined)
            {
                playPromise.then(function() {
                }).catch(function(error) {
                });
            }
        setTimeout(CloseModal, 2000);
    }
}
function ConsoleScroll(Console)
{
    Console.scrollTop = Console.scrollHeight;
}
function SelectTile(e,listToSearch)
{
    var tileSelected = e;
    if(!GameStarted){return;}
    if(WhosTurn=="Player"){tileSelected = e.currentTarget;}
    //var searchResults = IsShipInList(tileSelected);
    var itemInList =false;// = searchResults[0];
    var shipSelected;// = searchResults[1];
    var runOnDmg = false;
    var rand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    Modal.classList.remove("fade");
    Modal.classList.add("fade-5");
    Modal.style.display="block";
    ModalContent.innerHTML="<img id='playerCannon' src='images/cannonUp.png'><img id='enemyCannon' src='images/cannonDown.png'><div class='cannonMissile missileFalling'></div>";
    var Missile = document.querySelector(".cannonMissile");
    if(WhosTurn=="Player")
    {
        window.PlayerCannon = document.getElementById("playerCannon");
        PlayerCannon.style.display="block";
        PlayerCannon.classList.add("cannon");
    }
    if(WhosTurn=="Enemy")
    {
        window.EnemyCannon = document.getElementById("enemyCannon");
        EnemyCannon.style.display="block";
        EnemyCannon.classList.add("cannon");
    }
    setTimeout(function(){CloseModal(true);}, 5000);
    //This occurs in line with the firing animation of the cannon
    setTimeout(function(){
        var playPromise;
        if(rand==1){playPromise=snd_fire.play();}
        if(rand==2){playPromise=snd_fire2.play();}
        if(rand==3){playPromise=snd_fire3.play();}
        if(playPromise!==undefined)
        {
            playPromise.then(function() {
            }).catch(function(error) {
            });
        }
        Page.classList.add("shake");
        Modal.classList.add("flash");
    },500);
    //Displays the falling missile animation
    setTimeout(function(){
        Missile.style.display="block";
        //ModalContent.innerHTML="<div class='cannonMissile missileFalling'></div>";
    },1500);
    //alert(tileSelected.textContent);//Debug Purposes
    for(var i=0;i<listToSearch.length;i++)
        {
            if(tileSelected==listToSearch[i].objRef)
                {
                    itemInList=true;
                    shipSelected=listToSearch[i];
                    if(i>0){listToSearch.splice(i,1);}
                    else{listToSearch.shift();}
                }
        }
    setTimeout(function(){
        if(itemInList==true)
            {
                if(shipSelected.ownerRef)
                    {
                        shipSelected.objRef.style.backgroundColor="rgb(25,25,25)";
                        //EnemyConsole.innerHTML+="<span class='Hit'>A direct Hit!<hr></span>";
                        shipSelected.objRef.removeEventListener("click",SelectTile,false);
                        shipSelected = shipSelected.ownerRef;
                        runOnDmg = true;

                    }
                if(shipSelected.hp>1)
                {
                    if(WhosTurn=="Player"){EnemyConsole.innerHTML+="<span class='Hit'>A direct Hit!<hr></span>";}
                    if(WhosTurn=="Enemy")
                    {
                        PlayerConsole.innerHTML+="<span class='Hit'>Enemy has Hit one of your ships!<hr></span>";
                        //var targetRange = new Array();
                        var numTextContent = parseFloat(tileSelected.textContent);
                        for(var i=0;i<playerTiles.length;i++)
                            {
                                var numTextContentCompare = parseFloat(playerTiles[i].objRef.textContent);
                                if(numTextContentCompare==numTextContent+1){targetList.push(playerTiles[i]);}
                                if(numTextContentCompare==numTextContent-1){targetList.push(playerTiles[i]);}
                                if(numTextContentCompare==numTextContent+10){targetList.push(playerTiles[i]);}
                                if(numTextContentCompare==numTextContent-10){targetList.push(playerTiles[i]);}
                            }
                        for(var i=0;i<tilesAlreadyHit.length;i++)
                            {
                                for(var b=0;b<targetList.length;b++)
                                    {
                                        if(targetList[b].objRef==tilesAlreadyHit[i].objRef)
                                        {
                                            if(b>0){targetList.splice(b,1);}
                                            else{targetList.shift();}
                                        }
                                    }
                            }
                    }
                }
                shipSelected.hp -=1;
                ModalContent.innerHTML="<img class='splash' src='images/explosion1.gif'>";
                var playPromise = snd_Hit.play();
                if(playPromise!==undefined)
                {
                    playPromise.then(function() {
                    }).catch(function(error) {
                    });
                }
                if(!runOnDmg)
                {
                    ModalContent.innerHTML="<img class='splash' src='images/explosion1.gif'>";
                    var playPromise = snd_Hit.play();
                    if(playPromise!==undefined)
                    {
                        playPromise.then(function() {
                        }).catch(function(error) {
                        });
                    }
                    shipSelected.objRef.style.backgroundColor="rgb(25,25,25)";
                    shipSelected.objRef.removeEventListener("click", SelectTile,false);
                }
                if(shipSelected.hp<=0&&!shipSelected.destroyed)
                    {
                        var rand2 = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                        var playPromise;
                        if(rand2==1){playPromise = snd_shipDestroyed.play();}
                        if(rand2==2){playPromise = snd_shipDestroyed2.play();}
                        if(playPromise!==undefined)
                        {
                            playPromise.then(function() {
                            }).catch(function(error) {
                            });
                        }
                        ModalContent.innerHTML="<img class='splash' src='images/HitLargeTest.gif'>";
                        shipSelected.objRef.style.backgroundColor="rgb(25,25,25)";
                        shipSelected.destroyed=true;
                        if(WhosTurn=="Player")
                        {
                            EnemyConsole.innerHTML+="<span class='Sink'>You just sunk an Enemy Ship!<hr></span>";
                            enemiesDestroyed++;
                            ShipsCounter.innerHTML = "Ships Destroyed: "+enemiesDestroyed+"/"+numOfEnemies;                          
                        }
                        if(WhosTurn=="Enemy")
                        {
                            PlayerConsole.innerHTML+="<span class='Sink'>Enemy just sunk one of your Ships!<hr></span>";
                            playersDestroyed++;
                            while(targetList.length>4)//Empty CPU's List of possible targets
                                {targetList.shift();}
                        }
                        GameOver();
                    }
                ConsoleScroll(EnemyConsole);
                ConsoleScroll(PlayerConsole);
                //alert("BOOM! A direct Hit!");//Debug Purposes
            }
        else
            {
                //Modal.style.display="block";
                ModalContent.innerHTML="<img class='splash' src='images/waterSplashGood.gif'>";
                var playPromise = snd_Miss.play();
                if(playPromise!==undefined)
                {
                    playPromise.then(function() {
                    }).catch(function(error) {
                    });
                }
                if(WhosTurn=="Player"){EnemyConsole.innerHTML+="<span class='Miss'>Miss!<hr></span>";}
                if(WhosTurn=="Enemy"){PlayerConsole.innerHTML+="<span class='Miss'>Enemy Misses!<hr></span>";}
                tileSelected.style.backgroundColor="rgba(100,100,100,0.6)";
                ConsoleScroll(EnemyConsole);
                ConsoleScroll(PlayerConsole);
                //alert("Miss!");//Debug Purposes
            }
        if(WhosTurn=="Player"){PlayerCannon.classList.remove("cannon");}
        if(WhosTurn=="Enemy"){EnemyCannon.classList.remove("cannon");}
        Page.classList.remove("shake");
        Modal.classList.remove("flash");
    },3000);
}

function IsShipInList(obj)
{
    var isInList=false;
    var ship=null;
    var returnValue = new Array();
    for(var i=0;i<enemyPositions.length;i++)
        {
            //console.log(obj.textContent);
            //console.log(enemyPositions[i].objRef.textContent);//Debug Purposes
            if(obj==enemyPositions[i].objRef)
                {
                    //alert("test");
                    isInList=true;
                    ship=enemyPositions[i].objRef;
                    return [isInList, ship];
                }
        }
}
function ContiguousSecondPos(listPositions,tileGroup,ShowContiguity)
{
    var arrayLength = listPositions.length;
    for(var i=0;i<arrayLength;i++)
        {
            var currentShipSelected = listPositions[i].objRef;
            var currentShipText = currentShipSelected.textContent.charAt(1);
            if(currentShipText==""){currentShipText="1";}
            var rand = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            if(rand==2){rand=-1};
            if(rand==3){rand=10;}
            if(rand==4){rand=-10;}
            if(parseFloat(currentShipSelected.textContent)<=10)
                {
                    rand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
                    if(rand==2){rand=-1};
                    if(rand==3){rand=10;}
                }
            else if(parseFloat(currentShipSelected.textContent)>=boardSize-9)
                {
                    rand = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                    if(rand==2){rand=-1};                 
                }
            else if(currentShipText=="1")
                {rand = 1;}
            else if(currentShipText=="0")
                {rand = -1;}
            //console.log(i);//Debug Purposes
            //console.log("CharAt() "+currentShipText);//Debug Purposes
            for(var t=0;t<tileGroup.length;t++)
                {
                    var targetedTile = tileGroup[t].objRef;
                    var addition = parseFloat(currentShipSelected.textContent) + rand;
                    //console.log("Addition: " +addition);//Debug Purposes
                    if(targetedTile.textContent==addition.toString())
                        {
                            //var searchResults = IsShipInList(targetedTile);
                            var itemInList=false;// = searchResults[0];
                            //var shipSelected = searchResults[1];
                            for(var x=0;x<listPositions.length;x++)
                                {
                                    if(targetedTile==listPositions[x].objRef)
                                        {
                                            itemInList=true;
                                            //alert("");
                                        }
                                }
                            if(!itemInList)
                                {
                                    listPositions[i].hp++;
                                    listPositions[i].pos2=targetedTile;
                                    var shipTail = new ShipPart(listPositions[i], targetedTile);
                                    listPositions.push(shipTail);
                                    //currentShipSelected.style.backgroundColor="yellow";
                                    //console.log(enemyPositions[i].hp);//Debug Purposes
                                    if(ShowContiguity=="Yes"){targetedTile.style.backgroundColor="orange";}
                                }
                        }
                }
            
        }

}
function CloseModal(Switch)
{
    if(!gameOver){
        Modal.style.display="none";
        ModalContent.innerHTML="<img id='playerCannon' src='images/cannonUp.png'><img id='enemyCannon' src='images/cannonDown.png'>";
        window.PlayerCannon = document.getElementById("playerCannon");
        window.EnemyCannon = document.getElementById("enemyCannon");
        if(!Switch&&WhosTurn=="Enemy"){AI();}
        if(Switch){SwitchTurns();}
    }
}

function GameOver()
{
    if(enemiesDestroyed>=numOfEnemies)
        {
            gameOver=true;
            Modal.classList.remove("fade");
            Modal.classList.add("fadein");
            Modal.style.display="block";
            ModalContent.innerHTML ="<p class='glowText'>You Won!</p><p class='glowText'>You Destroyed all Enemy Ships!</p>";
            //alert("You Destroyed all of the enemy ships");
        }
    if(playersDestroyed>=numOfEnemies)
        {
            gameOver=true;
            var rand = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
            var playPromise;
            if(rand==1){playPromise = snd_music_fail.play();}
            if(rand==2){playPromise = snd_music_fail2.play();}
            if(playPromise!==undefined)
            {
                playPromise.then(function() {
                }).catch(function(error) {
                });
            }
            Modal.classList.remove("fade");
            Modal.classList.add("fadein");
            Modal.style.display="block";
            ModalContent.innerHTML ="<p class='glowText'>You Lost!</p><p class='glowText'>Enemy has Destroyed all of Your Ships!</p>";
            //alert("You Destroyed all of the enemy ships");
        }
}

function AI()
{
    var min = Math.ceil(0);
    var max = Math.floor(boardSize-1);
    var cpuTarget;
    var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    //if(SameTile){rand = Math.floor(Math.random() * (max - min + 1)) + min;continue checkIfSame;}
    if(targetList.length>0)
        {
            //console.log(targetList);Debug Purposes
            for(var i=0;i<targetList.length;i++)
                {
                    if(!cpuTarget)
                    {
                        tilesAlreadyHit.push(targetList[i]);
                        cpuTarget=targetList[i].objRef;
                        targetList.splice(i,1);
                    }
                }
            SelectTile(cpuTarget, playerPositions);
        }
    else
        {
            checkIfSame: for(var i=0;i<tilesAlreadyHit.length;i++)//Loop checks to see if the selected tile was already hit before
                {
                    if(tilesAlreadyHit[i].objRef.textContent==playerTiles[rand].objRef.textContent)
                    {
                        rand = Math.floor(Math.random() * (max - min + 1)) + min;
                        continue checkIfSame;
                    }
                }
            tilesAlreadyHit.push(playerTiles[rand]);
            cpuTarget = playerTiles[rand].objRef;
            SelectTile(cpuTarget, playerPositions); 
        }

}