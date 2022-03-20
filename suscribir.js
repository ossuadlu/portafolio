function suscribir(){
    email = document.getElementById("correo electronico").value;
    val=0;

    if(email==""){
      val++;
    }

    if(val== 0){
      document.getElementById("btn").disabled =false;
    }
    else {
      document.getElementById("btn").disabled = true;
    }
  }

  document.getElementById("email").addEventListener("keyup",suscribir);
  document.getElementById("btn").addEventListener("click",()=>{
    alert("tu suscripcion se ha realizado")
  });