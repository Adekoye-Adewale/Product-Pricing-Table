var ricep=document.getElementById("riceprice");
    var riceq=document.getElementById("ricequantity");
    var ricet=document.getElementById("ricetotal");
    
        ricep.value=100;
        riceq.value=("1");


    // let riceprice = "ricep.value";
    // let ricequantity = "riceq.value";

    // ricet.value=riceq.value * ricep.value;

    // document.getElementById("ricequantity").value = "vx";
    
function riceresult() {
        document.getElementById("ricetotal").value = [riceq.value * ricep.value];
    };


    var maizep=document.getElementById("maizeprice");
    var maizeq=document.getElementById("maizequantity");
    var maizet=document.getElementById("maizetotal");
    
        maizep.value=50;
        maizeq.value=("1");

    
function riceresult() {
        document.getElementById("maizetotal").value = [maizeq.value * maizep.value];
    }