let users = [
    {username:"razak",password:"mohamed"},
    {username:"rasheedha",password:"mohamed"}
]

function logout(){
    sessionStorage.removeItem("logged")
    location.assign("./login.html")
}

function login () {
//   e.preventDefault();
  const collectedUsername = document.getElementById("username").value;
  const collectedPassword = document.getElementById("password").value;
//   console.log(collectedUsername)
  users.map((user,index)=>{
    if(user.username===collectedUsername&&user.password===collectedPassword){
        sessionStorage.setItem("logged",user.username)
        window.location.assign("./crud.html")
    }
  })
  document.getElementById("err-login").innerHTML = "Invalid credentials"
}