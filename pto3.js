function pto(){
    event.preventDefault();

    var yrsWrkd = parseInt(document.getElementById("yrsWrkd").value);
    var hrsPerCk;
    if (yrsWrkd < 5 ){
        hrsPerCk = 5;
    }
    if (yrsWrkd >= 5){
        hrsPerCk = 6;
    }
    if (yrsWrkd >= 10){
        hrsPerCk = 7;
    }

    var wksWrkd = parseInt(document.getElementById("wksWrkd").value);
    var totHrsToDate = (wksWrkd / 2) * hrsPerCk;

    var ptoTkn = parseInt(document.getElementById("ptoTkn").value);
}