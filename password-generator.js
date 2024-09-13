let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passwordBox = document.getElementById("passwordBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");

sliderValue.textContent = inputSlider.value; /*js jab load hota hai tab hi show kare*/
inputSlider.addEventListener('input',() =>{
  sliderValue.textContent = inputSlider.value;

})

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*()_+";

 genBtn.addEventListener('click',() =>{
  passwordBox.value = generatePassword(); 
 })

function generatePassword(){
  let generatedPassword = "";
  let allChars = "";

  if(lowercase.checked){
    allChars += lowerChars;
  }
  if(uppercase.checked){
    allChars += upperChars;
  }
  if(numbers.checked){
    allChars += allNumbers;
  }
  if(symbols.checked){
    allChars += allSymbols;
  }

  if(allChars == ""){
    alert("Please select atleast one option");
    return "";
  }

  for(let i = 1; i <= inputSlider.value; i++){
    let randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars.charAt(randomIndex);
  }
  return generatedPassword;
}

copyIcon.addEventListener('click',()=>{
  if(passwordBox.value != "" || passwordBox.value.length >= 1){
    navigator.clipboard.writeText(passwordBox.value);
    copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
          copyIcon.innerHTML = "content_copy";
          copyIcon.title = "";
      }, 3000)

  }
})