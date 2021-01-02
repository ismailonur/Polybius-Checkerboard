var array = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "I", "J"],
    ["K", "L", "M", "N", "O"],
    ["P", "R", "S", "T", "U"],
    ["X", "W", "V", "Y", "Z"]
];

var harfler = {
    A: "11", B: "12", C: "13", D: "14", E: "15", F: "21", G: "22", H: "23", I: "24", J: "25", K: "31", L: "32", M: "33", N: "34", O: "35", P: "41", R: "42", S: "43", T: "44", U: "45", X: "51", W: "52", V: "53", Y: "54", Z: "55"
};


var sifre = "44423324322444114254"
var metin = "TRMILITARY"

var regex = /\d\d/g;

var resSifre = sifre.match(regex);
var resMetin = metin.split("");


var resSifreSonuc = "";
var resMetinSonuc = "";

(function () {
    resSifre.forEach((x) => {
        resSifreSonuc += (array[x[0] - 1][x[1] - 1])
    })
    console.log(resSifreSonuc);

    resMetin.forEach((x) => {
        resMetinSonuc += harfler[x]
    })
    console.log(resMetinSonuc);
}())