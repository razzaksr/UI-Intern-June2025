const validateName = () =>{
    var data = document.getElementById("fullname").value
    var err = document.getElementById("err-fullname")
    // alert(data)
    if(!(/^[A-Za-z ]{3,}$/).test(data)){
        err.innerHTML = "Invalid Full Name"
        err.style.color = "red"
    }
    else
        err.innerHTML=""
}
const validateAadhaar = () => {
    var data = document.getElementById("aadhaar").value
    var err = document.getElementById("err-aadhaar")
    // alert(data)
    if(!(/^[0-9]{12}$/).test(data)){
        err.innerHTML = "Invalid Aadhaar Number"
        err.style.color = "red"
    }
    else
        err.innerHTML=""
}
const validatePan = () => {
    var data = document.getElementById("pan").value
    var err = document.getElementById("err-pan")
    // alert(data)
    if(!(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/).test(data)){
        err.innerHTML = "Invalid pan Number"
        err.style.color = "red"
    }
    else
        err.innerHTML=""
}
const validateEmail = () => {
    var data = document.getElementById("email").value
    var err = document.getElementById("err-email")
    // alert(data)
    if(!(/[a-z0-9]{2,}@[a-z]{2,}\.[a-z]{2,}/).test(data)){
        err.innerHTML = "Invalid email"
        err.style.color = "red"
    }
    else
        err.innerHTML=""
}
const validateCheckBox = (group) => {
    const boxes = document.getElementsByName(group)
    var err = document.getElementById("err-association")
    for(var index = 0; index < boxes.length; index++){
        if(boxes[index].checked){
            err.innerHTML = ""
            return
        }
    }
    err.innerHTML = "No association has enabled"
    err.style.color = "red"
}
const validatePassword = () => {
    var data = document.getElementById("password").value
    var err = document.getElementById("err-password")
    // alert(data)
    if(!(/^(?=.*[@#$!&])[A-Za-z0-9@#$!&]{8,}$/).test(data)){
        err.innerHTML = "Invalid password"
        err.style.color = "red"
    }
    else
        err.innerHTML=""
}
const validateRadioBox = (group) => {
    const boxes = document.getElementsByName(group)
    var err = document.getElementById("err-association")
    for(var index = 0; index < boxes.length; index++){
        if(boxes[index].checked){
            err.innerHTML = ""
            return
        }
    }
    err.innerHTML = "No profession has selected"
    err.style.color = "red"
}
const validateResidence = () => {
    var data = document.getElementById("nri").value
    var err = document.getElementById("err-nri")
    // alert(data)
    if(data === "Select Resisence type"){
        err.innerHTML = "Invalid Residence"
        err.style.color = "red"
    }
    else
        err.innerHTML=""
}