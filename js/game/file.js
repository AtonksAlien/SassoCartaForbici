//GAME//

  let randomItem = (n) => {
    if (godmode == "true") {
      if (selezione == 0) {
        return 1
      } else if (selezione == 1) {
        return 2
      } else {
        return 0
      }
    } else {
    return (
      Math.floor(Math.random() * n)
    );
  }
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let godmode = urlParams.get('god');

let bottoneProponi = document.querySelector(".bottoneProponi")
let dioTrade = document.querySelector(".dioItem")
let bookElement = document.querySelector(".elementBookContainer")
let item = document.querySelectorAll(".elemento")
let playerTrade = document.querySelector(".player-trade")
let resetItem = document.querySelector(".resetItem")
let selezionato = 0
let res = document.querySelector(".res")
let punteggioDio = document.querySelector(".dio")
let punteggioTu = document.querySelector(".tu")
let titolo = document.querySelector(".titolo")
let indexDio = 0
let indexTu = 0
let history = document.querySelector(".history")
let match = 0
punteggioDio.innerHTML = 0
punteggioTu.innerHTML = 0
let selezione = 0
let balloon = document.querySelector(".pallone")

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", (e) => {
    selezionato = i
    selezione = selezionato
    playerTrade.classList.remove("d-none")
    let attributo = item[i].getAttribute('src')
    playerTrade.setAttribute("src", attributo)
  })
}

bottoneProponi.addEventListener("click", () => {
  if (playerTrade.classList.contains("d-none") == false && match<5) {
      itemCaso = randomItem(3);
      dioTrade.classList.remove("d-none")
      let bello = item[itemCaso].getAttribute('src')
      dioTrade.setAttribute("src", bello)
      titolo.classList.remove("txt-lose")
      titolo.classList.remove("txt-win")
      titolo.classList.remove("txt-draw")
      winner(selezionato, itemCaso)
      match++

  }
  if (godmode == "true" && match==5) {
    balloon.classList.remove("d-none")
  }
})

resetItem.addEventListener("click", () => {
  dioTrade.classList.add("d-none")
  playerTrade.classList.add("d-none")
  res.classList.add("d-none")
  res.classList.remove("lose")
  res.classList.remove("win")
  titolo.innerHTML = "ESITO"
  titolo.classList.remove("txt-lose")
  titolo.classList.remove("txt-win")
  titolo.classList.remove("txt-draw")
})

function winner (p1, p2) {
  let lose = false
  let draw = false
  let win = false
    if ((p1 + 1) % 3 == p2) {
      res.classList.remove("d-none")
      res.classList.add("lose")
        res.setAttribute("src", "./img/face-villager.png")
        indexDio++
        punteggioDio.innerHTML = indexDio
        titolo.innerHTML = "Hai Perso!"
        titolo.classList.add("txt-lose")
        lose = true
        draw = false
        win = false

    } else if (p1 == p2) {
      res.classList.remove("d-none")
      res.setAttribute("src", "./img/cow.jpg")
        titolo.innerHTML = "Pareggio!"
        titolo.classList.add("txt-draw")
        draw = true
        win = false
        lose = false

    } else {
      res.classList.remove("d-none")
      res.classList.add("win")
        res.setAttribute("src", "./img/steve-face.jpg")
        indexTu++
        punteggioTu.innerHTML = indexTu
        titolo.innerHTML = "Hai Vinto!"
        titolo.classList.add("txt-win")
        win = true
        lose = false
        draw = false
    }
    let yourMove = document.querySelector(".player-trade").getAttribute("src")
    let godMove = document.querySelector(".dioItem").getAttribute("src")
    history.innerHTML += `
    <li class="d-flex justify-content-between">
      <div class="you ${lose ? " lose ": win ? " win " : draw ? " draw " : ""} d-flex justify-content-center">
        <img src="./img/steve-face.jpg"/>
        <img src="${yourMove}"/>
      </div>
      <div class="bot ${lose ? " win ": win ? " lose " : draw ? " draw " : ""} d-flex justify-content-center">
        <img src="${godMove}"/>
        <img src="./img/face-villager.png"/>
      </div>
    </li>
`
}



//GAME-END//

/*Storico delle vittorie e delle sconfitte */
/*GODMODE? + BALLOON?*/
