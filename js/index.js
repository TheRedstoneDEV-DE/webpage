var lang = "en";
function main() {
  gotoH();
  setGoodSize();
  setTimeout(getLang,500);
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
function getLang(){
  var diagbox=document.getElementById("diagbox");
  diagbox.innerHTML="<h3>Please select the Language you're speaking:<br><br><select id='langselector'><option value='de'>German(Deutsch)</option><option value='en'>English(Englisch)</option></select><br><br><a onclick='translateSite()'><button>View Page</button></a></h3>";
  $( "#diagbox" ).dialog({
				close: function( event, ui ) {wipe();}
	});
}
function wipe() {
  var diagbox=document.getElementById("diagbox");
  diagbox.innerHTML="";
  document.getElementsByTagName("body")[0].style.overflow = "visible";
  close();
}
function setGoodSize(){
  width=window.screen.width;
  height=window.screen.height;
  var space = height/2.5;
  console.log(space.toString() + "px 0 0 0");
  document.getElementById("Hom").style.margin = space.toString() + "px 0px 0px 0px";
  if (width > 500 && height > 800) {

  }else{
    document.getElementById("Hom").style.margin = "1050px 0px 0px 0px";
    document.getElementById("header").innerHTML="";
    document.getElementById("menu").innerHTML="<a onclick='toggleMenu()'><img src='img/menu_button.png' height='80px' width='80px'></a>";
    changeTextSize2M();
  }
}
function changeTextSize2M(){
  ft = document.getElementsByTagName('footer')
  h1 = document.getElementsByTagName('h1');
  h2 = document.getElementsByTagName('h2');
  h3 = document.getElementsByTagName('h3');
  ft[0].classList.add("h2");
  for (var i = 0; i < h1.length; i++){
    h1[i].classList.add("h1");
  }
  for (var i = 0; i < h2.length; i++) {
    h2[i].classList.add("h2");
  }
  for (var i = 0; i < h3.length; i++) {
    h3[i].classList.add("h3");
  }
}
function translateSite(){
  lang = document.getElementById("langselector").value;

  if (lang=="de"){
    if (width > 500 && height > 800){
    document.getElementById("change").onclick = "";
    document.getElementById("change1").onclick = "";
    document.getElementById("change").addEventListener('click',gotoTW,false)
    document.getElementById("change1").addEventListener('click',gotoYT,false)
    document.getElementById("btn_aboutMe").innerHTML="Über Mich";
  }else{
    changeTextSize2M();
  }
    document.getElementById("headline").innerHTML="Wilkommen <br> auf der Webseite von TheRedstoneDEV_DE";
    document.getElementById("h1DC").innerHTML="Mein Discord Server";
    document.getElementById("text_DC").innerHTML="Wenn das widget nicht funktioniert könnt <br> ihr auch über diesen button joinen:";
    document.getElementById("DLcommingSoon").innerHTML="Momentan sind keine Downloads verfügbar! <br> Es werden bald welche kommen!";
    document.getElementById("h1About").innerHTML="Über Mich"
    document.getElementById("AboutText").innerHTML="Hallo, ich bin ein erfahrener Java <br>Programmierer, Youtuber und Twitch Streamer.<br> Ich komme aus Deutschland und <br>Spiele meistens Minecraft oder Portal.<br>Wenn du beim Aufürhen/Nutzen meiner<br> Programme Hilfe brauchst kannst du mich über Discord Kontaktieren, <br>eine GitHub Issue erstellen oder unter dem Neuesten Youtube Video einen<br> Kommentar hinterlassen, damit ich dir helfen kann.<br>Ich bin ein erfahrener Linux nutzer, also wenn du ein<br> Mac oder Windows Benutzer <br> bist, kann es sein, dass sich <br>einige Buttons und labels veschieben. Wenn <br> dies auftritt, informiere mich bitte darüber!<br><br>ACHTUNG: Es kann sein dass es auf Anderen <br> Plattformen wie Instagram, Facebook usw. Nutzer mit dem <br>Selben Namen gibt,<br> dass bin in dem Falle NICHT ich! Es sind <br>einfach nur Leute die <br>diesen Namen verwenden! Mein Kanal und Andere Plattformen, <br> auf denen ich aktiv bin sind unten zu finden!";
    document.getElementById("YT").innerHTML="<h1>Youtube</h1><h3>Mein Youtube Kanal: <a href='#'>#</a><br>Auf dem kommen Folgen <br> zum Programmieren, aber auch Gaming-Videos!";
    document.getElementById("TW").innerHTML="<h1>Twitch</h1><h3>Mein Kanal: <a href='#'>#</a><br>Hier kommen einfach Livestreams!";

  }else{
  }
  close();
}
function close(){
  $("#diagbox").dialog('close');
}
function una(){
  document.getElementById("diagbox2").innerHTML="This content is Unavailable!<br><br><a onclick='close2()'><button>close</button></a>";
  $( "#diagbox2" ).dialog({
				close: function( event, ui ) {wipe2();}
	});

}
function wipe2(){
  document.getElementById("diagbox2").innerHTML="";
}
function close2(){
  $("#diagbox2").dialog('close');
}
var Menu_Open = false;
function toggleMenu(){
  if (Menu_Open){
  document.getElementById("menu").innerHTML="<a onclick='toggleMenu()'><img src='img/menu_button.png' height='80px' width='80px'></a>";
  Menu_Open = false;
}else {
  document.getElementById("menu").innerHTML="<table class='openMenu'><tr><th>Menu</th></tr><tr><td class='menu_btn' onclick = 'gotoH()'>Home</td></tr><tr><td class='menu_btn' onclick = 'gotoDC()'>Discord</td></tr><tr><td class='menu_btn' onclick = 'gotoDL()'>Download</td></tr><tr><td class='menu_btn' onclick = 'gotoAM()'>About Me</td></tr><tr><td class='menu_btn' onclick = 'gotoGH()'>GitHub</td></tr><tr><td class='menu_btn' onclick = 'gotoYT()'>YouTube</td></tr><tr><td class='menu_btn' onclick = 'gotoTW()'>Twitch</td></tr><tr><td class='menu_btn' onclick = 'toggleMenu()'>[X]</td></tr></table>";
  Menu_Open = true;
  }
}

function gotoH(){
  $("html, body").animate({ scrollTop: 0 }, "slow");
}
function gotoDC(){
  document.getElementById("Discord").scrollIntoView({behavior: 'smooth'});
}
function gotoDL(){
  document.getElementById("Download").scrollIntoView({behavior: 'smooth'});
}
function gotoAM(){
  document.getElementById("AboutMe").scrollIntoView({behavior: 'smooth'});
}
function gotoGH(){
  document.getElementById("Github").scrollIntoView({behavior: 'smooth'});
}
function gotoYT(){
  document.getElementById("Youtube").scrollIntoView({behavior: 'smooth'});
}
function gotoTW(){
  document.getElementById("Twitch").scrollIntoView({behavior: 'smooth'});
}
