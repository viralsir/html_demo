function sayhello(){
        let user=document.getElementById("username").value;
        if(user == '')
        {
          document.getElementById("msg").innerHTML="enter your name";
         // alert("please enter your name ")
        }
        else
        {
          document.getElementById("msg").innerHTML="hello "+user;
         // alert('hello '+user);
        }

        document.getElementById("username").value="";
    }

// document.getElementById("click").onclick=sayhello;
document.addEventListener('DOMContentLoaded',function(){

      document.getElementById("click").onclick=sayhello;
})
