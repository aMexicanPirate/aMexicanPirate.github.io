setTimeout(function () { document.getElementById("no").style.display = 'block'; }, 2500);

let i = 32;
let interval = setInterval(function () {
    i--;
    document.getElementById("BOOM").innerHTML = i;
    if (i == 20) {
        document.getElementById("hint").style.display = 'block'; 
    }
    if (i == 0) {
        clearInterval(interval);
        document.getElementById("test bomb").src = "Bomb go explosion.jpg";
    }
}, 1000)



 function checkPin(){
     let i=document.getElementById("pin_input").value;
     const pin=23820;
     if (i==pin) {
         clearInterval(interval);
          document.getElementById("youDidntDie").innerHTML="Success!";
     }
     return false;
 }

