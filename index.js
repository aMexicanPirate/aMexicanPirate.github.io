setTimeout(function () { document.getElementById("no").style.display = 'block'; }, 2500);

let i = 22;
let interval = setInterval(function () {
    i--;
    document.getElementById("BOOM").innerHTML = i;
    if (i == 15) {
        document.getElementById("hint").style.display = 'block'; 
    }
    if (i == 0) {
        clearInterval(interval);
        document.getElementById("test bomb").src = "bomb go explosion.png"
    }
}, 1000)
