//  function myfunc(){
//     var a=Number(document.getElementById("username").value)
//     var b=Number(document.getElementById("password").value)
//     document.getElementById("head").innerHTML=a+b
    
// localStorage.setitems("key","value")
localStorage.setItem("name","bala")
localStorage.setItem("age","23")

var a=localStorage.getItem("name")
console.log(a);

localStorage.removeItem("name")

 sessionStorage.setItem("name","karthi")
 sessionStorage.setItem("age","21")

 var b=sessionStorage.getItem("age")
 console.log(b);

 sessionStorage.removeItem("name")
 