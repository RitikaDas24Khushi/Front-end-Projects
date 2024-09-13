const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]



function getCharacter(index) {
  return hexCharacters[index]
}

function generateNewColor() {
  let hexColorRep = "#"

  for (let index = 0; index < 6; index++) {
    const randomPosition = Math.floor(Math.random() * hexCharacters.length)
    hexColorRep += getCharacter(randomPosition)
  }

  return hexColorRep
}

let intervalId;
const startChangingColor = function() {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = generateNewColor();
  }
};
const stopChangingColor = function() {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);