var sifreCozBtn=document.getElementById("sifreCozButton");
var sifreOlusturBtn=document.getElementById("sifreOlusturButton");

sifreCozBtn.onclick=function(){
    var ad=document.getElementById("SifreCoz");
    //window.alert("Hoşgeldin: "+ad.value);
    document.getElementById("demo").innerHTML = ad.value;
    
    sifre = ad.value;

    RunSifreCoz()
}

sifreOlusturBtn.onclick=function(){
    var ad=document.getElementById("SifreOlustur");
    //window.alert("Hoşgeldin: "+ad.value);
    document.getElementById("demo").innerHTML = ad.value;
    
    metin = ad.value;

    RunSifreOlustur()
}

var sifre = ""
var metin = ""


var array = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "I", "J"],
    ["K", "L", "M", "N", "O"],
    ["P", "R", "S", "T", "U"],
    ["X", "W", "V", "Y", "Z"]
];

var harfler = {
    A: "11", B: "12", C: "13", D: "14", E: "15",
    F: "21", G: "22", H: "23", I: "24", J: "25",
    K: "31", L: "32", M: "33", N: "34", O: "35",
    P: "41", R: "42", S: "43", T: "44", U: "45",
    X: "51", W: "52", V: "53", Y: "54", Z: "55"
};

function RunSifreCoz(){
    var regex = /\d\d/g;
    var resSifre = sifre.match(regex);
    var resSifreSonuc = "";

    resSifre.forEach((x) => {
        resSifreSonuc += (array[x[0] - 1][x[1] - 1])
    })
    document.getElementById("demo").innerHTML = resSifreSonuc
    resSifreSonuc="";
}

function RunSifreOlustur(){
    var resMetin = metin.split("");
    var resMetinSonuc = "";

    resMetin.forEach((x) => {
        resMetinSonuc += harfler[x]
    })
    document.getElementById("demo").innerHTML = resMetinSonuc;
    resMetinSonuc="";
}

