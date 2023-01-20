
function insert(num){
  document.querySelector(".container form .textview").value = document.querySelector(".container form .textview").value  + num 
  }
  
  function equals(){
    document.querySelector(".container table tr td .equalButton").addEventListener("click", () => {
      document.querySelector(".container form .textview").value = eval(document.querySelector(".container form .textview").value)
    })
      
  }
  
  function clean(){
    document.querySelector(".container form .textview").value = ''
  }
  
  function back(){
    document.querySelector(".container form .textview").value = document.querySelector(".container form .textview").value.slice(0, -1)
  }









