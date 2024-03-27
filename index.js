//input stars
let inp=document.getElementById("inp")
console.log(inp);
//input ends

//**************************************************************************************************** */
//AC stars
let ac=document.getElementById("ac")
// console.log(ac);
ac.onclick=function(){
    inp.value=``
}
//ac ends

//**************************************************************************************************** */
//DE STARS
let de=document.getElementById("de")
// console.log(de);
de.onclick=function(){
    inp.value=inp.value.toString().slice(0,-1)
}
//DE ENDS

//**************************************************************************************************** */
//dot stars
let dot=document.getElementById("point")
// console.log(dot);
dot.onclick=function(){
    inp.value+=`.`
}
//dot ends

//**************************************************************************************************** */
//divide stars
let divide=document.getElementById("divide")
// console.log(divide);
divide.onclick=function(){
    inp.value+=`/`
}
//divide ends

//**************************************************************************************************** */
//seven stars
let seven=document.getElementById("seven")
// console.log(seven);
seven.onclick=function(){
    inp.value+=`7`
}
//sevem ends

//**************************************************************************************************** */
//eight stars
let eight=document.getElementById("eight")
// console.log(eight);
eight.onclick=function(){
    inp.value+=`8`
}
//eight ends

//**************************************************************************************************** */
//nine stars
let nine=document.getElementById("nine")
// console.log(nine);
nine.onclick=function(){
    inp.value+=`9`
}
//nine ends

//**************************************************************************************************** */
//multiply stars
let star=document.getElementById("star")
// console.log(star);
star.onclick=function(){
    inp.value+=`*`
}
//multiply ends

//**************************************************************************************************** */
//four stars
let four=document.getElementById("four")
// console.log(four);
four.onclick=function(){
    inp.value+=`4`
}
//four ends

//**************************************************************************************************** */
//five stars
let five=document.getElementById("five")
// console.log(five);
five.onclick=function(){
    inp.value+=`5`
}
//five ends

//**************************************************************************************************** */
//six stars
let six=document.getElementById("six")
// console.log(six);
six.onclick=function(){
    inp.value+=`6`
}
//six ends

//**************************************************************************************************** */
//minus stars
let minus=document.getElementById("subtract")
// console.log(minus);
minus.onclick=function(){
    inp.value+=`-`
}
//minus ends

//**************************************************************************************************** */
//one stars
let one=document.getElementById("one")
// console.log(one);
one.onclick=function(){
    inp.value+=`1`
}
//one ends

//**************************************************************************************************** */
//two starts
let two=document.getElementById("two")
// console.log(two);
two.onclick=function(){
    inp.value+=`2`
}
//two ends

//**************************************************************************************************** */
//three stars
let three=document.getElementById("three")
// console.log(three);
three.onclick=function(){
    inp.value+=`3`
}
//three ends

//**************************************************************************************************** */
//plus stars
let plus=document.getElementById("plus")
// console.log(plus);
plus.onclick=function(){
    inp.value+=`+`
}
//plus ends

//**************************************************************************************************** */
//double zero stars
let dzero=document.getElementById("dzero")
// console.log(dzero);
dzero.onclick=function(){
    inp.value+=`00`
}
//double zero ends

//**************************************************************************************************** */
//zero stars
let zero=document.getElementById("zero")
// console.log(zero);
zero.onclick=function(){
    inp.value+=`0`
}
//zero ends

//**************************************************************************************************** */
//equals start
let equals=document.getElementById("equal")
console.log(equals);
equals.onclick=function(){
    console.log(inp.value);
    inp.value=eval(inp.value)
}
//equals end