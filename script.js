function printMessage(element) {

  console.log(element.innerText);
  element.innerText = "Log out!";
}

// function mouseOut(){
//   console.log("the mouse left");
// } 

function remove(){
  var disabled = document.querySelector("#disabled");
  disabled.remove()
}

function ninjaliked(){
  alert('Ninja was liked')
  
}

