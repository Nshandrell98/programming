function pto(){
    event.preventDefault();
    var output = document.getElementById("output");
    var yrsWrkd = parseInt(document.getElementById("yrsWrkd").value);
    var hdw = Number(document.querySelector('input[name=HDW]:checked').value);
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
    var yearlyPTO = hrsPerCk * 26;
    var wksWrkd = parseInt(document.getElementById("wksWrkd").value);
    var totHrsToDate = (wksWrkd / 2) * hrsPerCk;

    var ptoTkn = parseInt(document.getElementById("ptoTkn").value);
    var ptoLeft = yearlyPTO - ptoTkn;

    if (hdw === 1){
        ptoLeft = ptoLeft;
    }
    if (hdw === 2 ){
        ptoLeft = ptoLeft / 8;
    }
    if (hdw === 3){
        ptoLeft = ptoLeft / 40;
    }
    output.textContent = ptoLeft;
}