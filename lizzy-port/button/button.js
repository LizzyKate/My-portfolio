var colours = ["red", "orange", "violet", "grey", "brown", "yellow", "green"];
var ranDom = function (){
    return Math.floor(Math.random() * colours.length);

}
function Change(){
    document.querySelector("body").style.backgroundColor = colours[ranDom()];
    }