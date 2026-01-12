let n;
let sum=0;
document.getElementById("zero").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+=0
}
document.getElementById("one").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+=1
}
document.getElementById("two").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+=2
}
document.getElementById("three").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+=3
}
document.getElementById("four").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+=4
}
document.getElementById("five").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+=5
}
document.getElementById("six").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+=6
}
document.getElementById("seven").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+=7
}
document.getElementById("eight").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+=8
}
document.getElementById("nine").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+=9
}

document.getElementById("ac").onclick = function() {
    let input = document.getElementById("myInput")
    input.value=""
}
document.getElementById("plus").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+="+"
}
document.getElementById("minus").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+="-"
}
document.getElementById("multiplication").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+="*"
}
document.getElementById("division").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+="/"
}
document.getElementById("power").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+="**"
}
document.getElementById("del").onclick = function() {
    let input = document.getElementById("myInput")
    input.value=input.value.slice(0,-1)
}
document.getElementById("dot").onclick = function() {
    let input = document.getElementById("myInput")
    input.value+="."
}
document.getElementById("percent").onclick = function() {
    let input = document.getElementById("myInput")
    input.value=input.value*0.01
}
document.getElementById("equal").onclick = function() {
    let input = document.getElementById("myInput")
        input.value=eval(input.value)
}
