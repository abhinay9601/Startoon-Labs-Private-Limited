var input1=false;
var input2=false; 
let deg=90;
function submitHandler(){
    input1 = parseInt(document.getElementById("input1").value);
    input2 = parseInt(document.getElementById("input2").value);
console.log(input1)
if(input1>input2 || input1<=-1 || input2<=-1){
    alert("You have entered wrong value");
    return;
}

if(input1>-1 && input2>-1){
   var value=100-(input1*100/input2);
    deg=input1*360/input2
   document.getElementById('piechartright').style.height=`${value}%`;
   document.getElementById('piechartleft').style.height=`${value}%`;
   document.getElementById('piechartmiddle').style.background=`conic-gradient(#C2E3FF ${deg}deg, rgb(170, 170, 170) 0 235deg)`
   var a= input1*100/input2;
   document.getElementById("level1").innerHTML=`${a}%`;
   document.getElementById("level2").innerHTML=`${a}%`;
   document.getElementById("level3").innerHTML=`${a}%`;
}

}

function firstColor(){
    document.getElementById("color1").style.border="2px solid black";
    document.getElementById("color2").style.border="0";
    document.getElementById("color3").style.border="0";
    document.getElementById("color4").style.border="0";

    document.getElementById('leftcontainer').style.backgroundColor="#fffff9";
    document.getElementById('leftcontainer').style.border="2px solid black";
    document.getElementById('rightcontainer').style.border="2px solid black";
    document.getElementById('piechartmiddle').style.border="2px solid black";

    document.getElementById('rightcontainer').style.backgroundColor="#ffffff";
    document.getElementById('piechartright').style.background=`linear-gradient(to top, #ffffff, rgb(205, 205, 205))`
    document.getElementById('piechartmiddle').style.background=`conic-gradient(#ffffff ${deg}deg, rgb(170, 170, 170) 0 235deg)`
 
 }
 function secondColor(){
    document.getElementById("color2").style.border="2px solid black";
    document.getElementById("color1").style.border="0";
    document.getElementById("color3").style.border="0";
    document.getElementById("color4").style.border="0";

    document.getElementById('leftcontainer').style.border="0";
    document.getElementById('rightcontainer').style.border="0";
    document.getElementById('piechartmiddle').style.border="0";
    document.getElementById('leftcontainer').style.backgroundColor="#c2e3ff";
    document.getElementById('rightcontainer').style.backgroundColor="#c2e3ff";
    document.getElementById('piechartright').style.background=`linear-gradient(to top, #c2e3ff, rgb(205, 205, 205))`
    document.getElementById('piechartmiddle').style.background=`conic-gradient(#c2e3ff ${deg}deg, rgb(170, 170, 170) 0 235deg)`

 
 }
 function thirdColor(){
    document.getElementById("color3").style.border="2px solid black";
    document.getElementById("color2").style.border="0";
    document.getElementById("color1").style.border="0";
    document.getElementById("color4").style.border="0";

    document.getElementById('leftcontainer').style.border="0";
    document.getElementById('rightcontainer').style.border="0";
    document.getElementById('piechartmiddle').style.border="0";
    document.getElementById('leftcontainer').style.backgroundColor="#008cff";
    document.getElementById('rightcontainer').style.backgroundColor="#008cff";
    document.getElementById('piechartright').style.background=`linear-gradient(to top, #008cff, rgb(205, 205, 205))`
    document.getElementById('piechartmiddle').style.background=`conic-gradient(#008cff ${deg}deg, rgb(170, 170, 170) 0 235deg)`
 
 }

function fourthColor(){
    document.getElementById("color4").style.border="2px solid black";
    document.getElementById("color2").style.border="0";
    document.getElementById("color3").style.border="0";
    document.getElementById("color1").style.border="0";

    document.getElementById('leftcontainer').style.border="0";
    document.getElementById('rightcontainer').style.border="0";
    document.getElementById('piechartmiddle').style.border="0";
   document.getElementById('leftcontainer').style.backgroundColor="#003F73";
   document.getElementById('rightcontainer').style.backgroundColor="#003F73";
   document.getElementById('piechartright').style.background=`linear-gradient(to top, #003F73, rgb(205, 205, 205))`
   document.getElementById('piechartmiddle').style.background=`conic-gradient(#003f73 ${deg}deg, rgb(170, 170, 170) 0 235deg)`

}