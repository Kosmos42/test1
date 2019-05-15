function takeFormAndSum() {
  let form = document.forms[0];

  if (isNaN(parseFloat(form.firstNumber.value)))
  {
    alert("В первом поле не число");
    return false
  }
  if(isNaN(parseFloat(form.secondNumber.value)))
  {
    alert("Во втором поле нет числа");
    return false;
  }
  return false;
}