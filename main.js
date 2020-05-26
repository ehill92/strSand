var bread;
var filling;
var strSandwhich;

function getIngredients(){
    bread = document.getElementById("bread").value;
    document.getElementById("breadtype").innerHTML = bread;
    filling = document.getElementById("filling").innerHTML = filling;
    strSandwhich = bread.substring(0,2) + filling + bread.substring(2);
    document.getElementById("strSand").innerHTML = strSandwhich;

}
function makeAstrSandwhcih(){
    getIngredients();
    console.log(strSandwhich);
}