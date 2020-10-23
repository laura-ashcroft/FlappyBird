function myFunction() {
    //let playerName = document.getElementById("playerName").value();
    let input = document.querySelector('input');
    let label = document.querySelector("playerLabel");
    label.innerText = `Player Name:  ${inputValue}`;
    return input.value;
  }