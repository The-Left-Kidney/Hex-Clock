   

   
   
var clock = document.getElementById('clock');

var hex_color= document.getElementById('hex_color'); 

function hexClock() {
	
var time = new Date(); 

var hours = (time.getHours()%12).toString(); 
var mintues = time.getMinutes().toString(); 
var seconds = time.getSeconds().toString(); 
	
	
if (hours.length < 2){ 
   hours = "0" + hours;  
} 
 
if (mintues.length < 2){ 
   mintues = "0" + mintues;  
} 

if (seconds.length < 2){ 
   seconds = "0" + seconds;  
}  

var clockstr = hours + ":" + mintues + ":" + seconds; 
var hexcolorstr = "#" + hours + mintues + seconds;

clock.textContent = clockstr;
hex_color.textContent = hexcolorstr;


document.body.style.backgroundColor = hexcolorstr;


}
hexClock();
setInterval(hexClock,1000);