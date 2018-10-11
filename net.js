function netpay(){
    event.preventDefault();
    var output = document.getElementById("output");
    var gross = parseInt(document.getElementById("gross").value);
    var fed = gross * .15;
    var state = gross * .05;
    var fica = gross * .0762;
    var ded = parseInt(document.getElementById("ded").value);
    var net = gross - (fed + state + fica + ded);

    output.textContent = net;
}
