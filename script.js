function countDown(){
 /*kita tampung objek new Date ke dalam variabel OBJECTDATE*/
    let OBJECTDATE = new Date();
    let DAY = 7-OBJECTDATE.getDay();
    let HOURS = 24-OBJECTDATE.getHours();
    let MINUTES = 59-OBJECTDATE.getMinutes();
    let SECONDS = 59-OBJECTDATE.getSeconds();
 document.getElementById('countDown').innerHTML = `<div class="flex-center">
 <div class="grid">
<p class="sizes-1-8rem">${DAY}</p>
 <p class="sizes-1rem">day</p>
 </div> 
 <div class="grid">
<p class="sizes-1-8rem">${ HOURS}</p>
 <p class="sizes-1rem">Hours</p>
 </div> 
 <div class="grid">
<p class="sizes-1-8rem">${MINUTES}</p>
 <p class="sizes-1rem">Minutes</p>
 </div> 
 <div class="grid">
<p class="sizes-1-8rem">${SECONDS}</p>
 <p class="sizes-1rem">Seconds</p>
 </div> 
 </div>`
}
 countDown();
setInterval(()=>{
  countDown();
},1000)

let audio = document.getElementById('audio');

document.addEventListener("click", function() {
  audio.currentTime = 0;
  audio.play();
});
audio.addEventListener("ended", function() {
  audio.currentTime = 0;
  audio.play();
});
