//GODMODE-START//
let godButton = document.querySelector(".godButton")
let god = false
let play = document.querySelector("a")

let start = function (e) {
  event.preventDefault()
  window.location.href = "./game.html?god=" + god
}



let mode = function (e){
  let godmodeButton = document.querySelector(".switch")
  if (godmodeButton.innerHTML == "OFF") {
    god = true
    godmodeButton.innerHTML = "ON"
  } else {
    god = false
    godmodeButton.innerHTML = "OFF"
  }
  console.log(god);
}

play.addEventListener("click", start)
godButton.addEventListener("click", mode)

//GODMODE-START-END//
