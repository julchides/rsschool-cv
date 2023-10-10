function changeText(event) {
  event.preventDefault();
  let userName = prompt("What is your name?");
  let newText = document.querySelector("#text-change");
  newText.innerHTML = `Hello, ${userName}! Text change was successful!`;
}

let buttonChangeText = document.querySelector("#button");
buttonChangeText.addEventListener("click", changeText);
