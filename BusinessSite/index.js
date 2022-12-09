
//cases
function caseCart(){
    const c1Amount =  document.getElementById("C1");
    var amount = c1Amount.value;
    
    let c1 = document.getElementById("priceC1").innerHTML;
    c1= c1.replace("$","");
    c1 = parseFloat(c1);

    return amount * c1;
}

function caseCart2(){
    const c2Amount =  document.getElementById("C2");
    var amount = c2Amount.value;
    
    let c2 = document.getElementById("priceC2").innerHTML;
    c2= c2.replace("$","");
    c2 = parseFloat(c2);

    return amount * c2;
}

function caseCart3(){
    const c3Amount =  document.getElementById("C3");
    var amount = c3Amount.value;
    
    let c3 = document.getElementById("priceC3").innerHTML;
    c3= c3.replace("$","");
    c3 = parseFloat(c3);

    return amount * c3;
}

function caseCart4(){
    const c4Amount =  document.getElementById("C4");
    var amount = c4Amount.value;
    
    let c4 = document.getElementById("priceC4").innerHTML;
    c4= c4.replace("$","");
    c4 = parseFloat(c4);

    return amount * c4;
}

function caseCart5(){
    const c5Amount =  document.getElementById("C5");
    var amount = c5Amount.value;
    
    let c5 = document.getElementById("priceC5").innerHTML;
    c5= c5.replace("$","");
    c5 = parseFloat(c5);

    return amount * c5;s
}

function addTotal(C1,C2,C3,C4,C5){

    var total = C1 + C2 + C3 + C4 + C5;

    document.getElementById("caseCart").innerHTML = "Case: $" + total;
}
// hard drive
function hddCart(){
    const h1Amount =  document.getElementById("H1");
    var amount = h1Amount.value;
    
    let h1 = document.getElementById("priceH1").innerHTML;
    h1= h1.replace("$","");
    h1 = parseFloat(h1);

    return amount * h1;
}

function hddCart2(){
    const h2Amount =  document.getElementById("H2");
    var amount = h2Amount.value;
    
    let h2 = document.getElementById("priceH2").innerHTML;
    h2= h2.replace("$","");
    h2 = parseFloat(h2);

    return amount * h2;
}

function hddCart3(){
    const h3Amount =  document.getElementById("H3");
    var amount = h3Amount.value;
    
    let h3 = document.getElementById("priceH3").innerHTML;
    h3= h3.replace("$","");
    h3 = parseFloat(h3);

    return amount * h3;
}

function hddCart4(){
    const h4Amount =  document.getElementById("H4");
    var amount = h4Amount.value;
    
    let h4 = document.getElementById("priceH4").innerHTML;
    h4= h4.replace("$","");
    h4 = parseFloat(h4);

    return amount * h4;
}

function hddCart5(){
    const h5Amount =  document.getElementById("H5");
    var amount = h5Amount.value;
    
    let h5 = document.getElementById("priceH5").innerHTML;
    h5= h5.replace("$","");
    h5 = parseFloat(h5);

    return amount * h5;
}

function addTotalHdd(C1,C2,C3,C4,C5){

    var total = C1 + C2 + C3 + C4 + C5;

    document.getElementById("hddCart").innerHTML = "HDD: $" + total;
}

//ram

function ramCart(){
    const h1Amount =  document.getElementById("R1");
    var amount = h1Amount.value;
    
    let r1 = document.getElementById("priceR1").innerHTML;
    r1= r1.replace("$","");
    r1 = parseFloat(r1);

    return amount * r1;
}

function ramCart2(){
    const h2Amount =  document.getElementById("R2");
    var amount = h2Amount.value;
    
    let r2 = document.getElementById("priceR2").innerHTML;
    r2= r2.replace("$","");
    r2 = parseFloat(r2);

    return amount * r2;
}

function ramCart3(){
    const h3Amount =  document.getElementById("R3");
    var amount = h3Amount.value;
    
    let r3 = document.getElementById("priceR3").innerHTML;
    r3= r3.replace("$","");
    r3 = parseFloat(r3);

    return amount * r3;
}

function ramCart4(){
    const h4Amount =  document.getElementById("R4");
    var amount = h4Amount.value;
    
    let r4 = document.getElementById("priceR4").innerHTML;
    r4= r4.replace("$","");
    r4 = parseFloat(r4);

    return amount * r4;
}

function ramCart5(){
    const r5Amount =  document.getElementById("R5");
    var amount = r5Amount.value;
    
    let r5 = document.getElementById("priceR5").innerHTML;
    r5= r5.replace("$","");
    r5 = parseFloat(r5);

    return amount * r5;
}

function addTotalRam(C1,C2,C3,C4,C5){

    var total = C1 + C2 + C3 + C4 + C5;

    document.getElementById("ramCart").innerHTML = "Ram: $" + total;
}

//Motherboard

function mbCart(){
    const m1Amount =  document.getElementById("M1");
    var amount = m1Amount.value;
    
    let m1 = document.getElementById("priceM1").innerHTML;
    m1= m1.replace("$","");
    m1 = parseFloat(m1);

    return amount * m1;
}

function mbCart2(){
    const m2Amount =  document.getElementById("M2");
    var amount = m2Amount.value;
    
    let m2 = document.getElementById("priceM2").innerHTML;
    m2= m2.replace("$","");
    m2 = parseFloat(m2);

    return amount * m2;
}

function mbCart3(){
    const m3Amount =  document.getElementById("M3");
    var amount = m3Amount.value;
    
    let m3 = document.getElementById("priceM3").innerHTML;
    m3= m3.replace("$","");
    m3 = parseFloat(m3);

    return amount * m3;
}

function mbCart4(){
    const m4Amount =  document.getElementById("M4");
    var amount = m4Amount.value;
    
    let m4 = document.getElementById("priceM4").innerHTML;
    m4= m4.replace("$","");
    m4 = parseFloat(m4);

    return amount * m4;
}

function mbCart5(){
    const m5Amount =  document.getElementById("M5");
    var amount = m5Amount.value;
    
    let m5 = document.getElementById("priceM5").innerHTML;
    m5= m5.replace("$","");
    m5 = parseFloat(m5);

    return amount * m5;
}

function addTotalMb(C1,C2,C3,C4,C5){

    var total = C1 + C2 + C3 + C4 + C5;

    document.getElementById("mbCart").innerHTML = "Motherboard: $" + total;
}