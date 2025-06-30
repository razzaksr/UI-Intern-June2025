// alert("JS called")
var cm = document.getElementById("centimeter")
var ft = document.getElementById("feet")
cm.addEventListener("input", function(){
    ft.value = cm.value/30.48
})