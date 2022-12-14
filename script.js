var ricep=document.getElementById("riceprice");
var riceq=document.getElementById("ricequantity");
var ricet=document.getElementById("ricetotal");

    // ricep.value=100;
    // riceq.value="1";


// let riceprice = "ricep.value";
// let ricequantity = "riceq.value";

// ricet.value=riceq.value * ricep.value;

// document.getElementById("ricequantity").value = "vx";

    function riceresult() {
        document.getElementById("ricetotal").value = riceq.value * ricep.value;
    };



var maizep=document.getElementById("maizeprice");
var maizeq=document.getElementById("maizequantity");
var maizet=document.getElementById("maizetotal");

    // maizep.value=50;
    // maizeq.value="1";


function maizeresult() {
    document.getElementById("maizetotal").value = maizeq.value * maizep.value;
}


ricet.value = [Number(riceq.value)] * [Number(ricep.value)];
maizet.value = [Number(maizeq.value)] * [Number(maizep.value)];



// let x = [Number(maizet.value) + Number(ricet.value)];

function totalresult() {


document.getElementById("trst").value = [Number(maizet.value) + Number(ricet.value)];
}



    // var mtv=document.getElementById(maizetotal).value = xmtx;


