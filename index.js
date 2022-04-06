
function random(x){
    return x[Math.floor(Math.random()*x.length)]
              }

  let who = ["perro", "elefante", "serpiente", "cacatua", "hamster"];
  let action = ["se comió", "destrozó", "rompió", "jugó con"];
  let what = ["mi tarea", "mi laptop", "mi cuaderno", "mi teclado"];
  let when = ["hace 10 minutos", "antes del anochecer", "mientras yo dormía", "cuando no estaba mirando"]

function excusaRandom(){
   let string = `Mi ${random(who)} ${random(action)} ${random(what)} ${random(when)}`;
   return document.getElementById("excuse").innerHTML = string;
 }


let button = document.getElementById("refresh");
button.addEventListener("click", excusaRandom)

document.getElementById("excuse").innerHTML = excusaRandom();
