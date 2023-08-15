var timer = setInterval(timerFun,1000);

function timerFun(){
    var min= document.getElementById("min").innerText;
    var sec= document.getElementById("sec").innerText;
    var hour= document.getElementById("hour").innerText;

    if(parseInt(min)===59 && parseInt(sec)===59){
        var newHour= (parseInt(hour)+1).toString();
        if(newHour<10){
            newHour = "0"+newHour;
        }
        document.getElementById("hour").innerHTML = newHour;
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
    }
    else{
        if(parseInt(sec)===59){
            var newMin = (parseInt(min)+1).toString();
            if(newMin<10){
                newMin="0"+newMin;
            }
            document.getElementById("sec").innerHTML = "00";
            document.getElementById("min").innerHTML = newMin;
        }
        else{
            var newSec = (parseInt(sec)+1).toString();
            if(newSec < 10){
                newSec = "0"+newSec;
            }
            document.getElementById("sec").innerHTML = newSec;
        }
    }
}