const form = document.querySelector('form') 
form.addEventListener('submit',function(e){
e.preventDefault()
  const heights = parseInt(document.querySelector('#heights').value)
  
  const weights = parseInt(document.querySelector('#weights').value)

  const results = document.querySelector('#results')
  if (heights === '' || heights < 0 || isNaN(heights)) {
    results.innerHTML = "Please give a valid height";
  } else if (weights === '' || weights < 0 || isNaN(weights)) {
    results.innerHTML = "Please give a valid weight";
  }
else{
  const bmi = (weights / ((heights * heights)/10000)).toFixed(2);
results.innerHTML = bmi;
  if(bmi < 18.6){
    results.innerHTML = `Under Weight :<span>${bmi}</span>`;
  }
  else if(bmi >= 18.6 && bmi < 24.9)
  {
    results.innerHTML = `Normal Range :<span>${bmi}</span>`;
  }
  else{
    results.innerHTML = `Over Weight :<span>${bmi}</span>`;
  }
}
  
});
  