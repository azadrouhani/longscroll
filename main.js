var opin = document.getElementById('opin');
var counter = document.getElementById('counter');
var opinintro = document.getElementById('opinintro');
var genintro = document.getElementById('genintro');
var mediaintro = document.getElementById('mediaintro');
var classintro = document.getElementById('classintro');
var infincorp = document.getElementById('infincorp');
var jack = document.getElementById('jack');
var skyline2=document.getElementById('skyline2');
var skyline3=document.getElementById('skyline3');
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var img3=document.getElementById('img3');
var img4=document.getElementById('img4');
var img5=document.getElementById('img5');
var img6=document.getElementById('img6');
var opinon = 1;
//console.log("yeah");
//window.scrollBy(100, 100);
//alert(window.pageXOffset + window.pageYOffset);

window.onscroll = function() {

    
    var distance = window.pageXOffset;
    
console.log(distance);
counter.innerHTML = "<span>Year </span>"+Math.floor(distance/800+2022);

    counter.style.left = 100+ distance +"px";
    
    if(distance>5000){
        counter.style.backgroundColor = "#ad212f";
        skyline2.style.opacity=1;
    } else{
        counter.style.backgroundColor = "#004600";
        skyline2.style.opacity=0;
    }
    if(distance>10000){ 
        skyline3.style.opacity=100;
    }
    else{
        skyline3.style.opacity=0;
    }
}
opin.onclick=function(){
 if(opinon==false){
     opinon=true;
     opin.style.backgroundColor="#ad212f";
     document.body.style.background = "linear-gradient(to bottom, #d72eea 15%,#65187c 51%,#3fad20 61%,#5b440e 68%,#000000 91%)";
     opinintro.style.background="#dc73df";
     genintro.style.background="#dc73df";
     mediaintro.style.background="#dc73df";
     classintro.style.background="#dc73df";
     infincorp.style.background="#dc73df";
     jack.style.background="#dc73df";
     img1.style.background="#8357dd url('images/opin2.png')"
     img1.style.backgroundRepeat= "no-repeat";
     img1.style.backgroundPosition="center";
     img2.style.background="#8357dd url('images/gen_2.png')"
     img2.style.backgroundRepeat= "no-repeat";
     img2.style.backgroundPosition="center";
     img3.style.background="#8357dd url('images/media-1.png')"
     img3.style.backgroundRepeat= "no-repeat";
     img3.style.backgroundPosition="center";
     img4.style.background="#8357dd url('images/class-1.png')"
     img4.style.backgroundRepeat= "no-repeat";
     img4.style.backgroundPosition="center";
     img3.style.background="#8357dd url('images/media-1.png')"
     img3.style.backgroundRepeat= "no-repeat";
     img3.style.backgroundPosition="center";
     img5.style.background="#8357dd url('images/infinitycorp.png')"
     img5.style.backgroundRepeat= "no-repeat";
     img5.style.backgroundPosition="center";
     img6.style.background="#8357dd url('images/jacki.png')"
     img6.style.backgroundRepeat= "no-repeat";
     img6.style.backgroundPosition="center";
 } else{
     opinon=false;
     opin.style.backgroundColor="#004600";
     document.body.style.background = "linear-gradient(to bottom, #db6c2b 0%,#d6bc2a 62%,#3ace27 66%,#6b4111 70%,#000000 100%)";
     opinintro.style.background="#d6750a";
     genintro.style.background="#d6750a";
     mediaintro.style.background="#d6750a";
     classintro.style.background="#d6750a";
     infincorp.style.background="#d6750a";
     jack.style.background="#d6750a";
     img1.style.background="#ad212f url('images/opin1.png')"
     img1.style.backgroundRepeat= "no-repeat";
     img1.style.backgroundPosition="center";
     img2.style.background="#ad212f url('images/gen_1.png')"
     img2.style.backgroundRepeat= "no-repeat";
     img2.style.backgroundPosition="center";
     img3.style.background="#ad212f url('images/media-2.png')"
     img3.style.backgroundRepeat= "no-repeat";
     img3.style.backgroundPosition="center";
     img4.style.background="#ad212f url('images/class-2.png')"
     img4.style.backgroundRepeat= "no-repeat";
     img4.style.backgroundPosition="center";
     img5.style.background="#ad212f url('images/infinitycorp.png')"
     img5.style.backgroundRepeat= "no-repeat";
     img5.style.backgroundPosition="center";
     img6.style.background="#ad212f url('images/jacki.png')"
     img6.style.backgroundRepeat= "no-repeat";
     img6.style.backgroundPosition="center";
 }
console.log(opinon);
}

