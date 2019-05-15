function takeFormAndSum() {
  let form = document.forms[0];
  const parsedFirstNumber = parseFloat(form.firstNumber.value);
  const parsedSecondNumber = parseFloat(form.secondNumber.value);
  if (isNaN(parsedFirstNumber))
  {
    alert("В первом поле не число");
    return false
  }
  if(isNaN(parsedSecondNumber))
  {
    alert("Во втором поле нет числа");
    return false;
  }
  // 3.00000004 problem avoid. Finding number after point and formating number using toFixed
  const lengthAfterPointFirstNumber = form.firstNumber.value.replace("0.","").length;
  const lengthAfterPointSecondNumber = form.secondNumber.value.replace("0.","").length;
  let maxLengthToFix;
  if (lengthAfterPointFirstNumber > lengthAfterPointSecondNumber)
  {
    maxLengthToFix = lengthAfterPointFirstNumber;
  } else
  {
    maxLengthToFix = lengthAfterPointSecondNumber;
  }
  let sum = (parsedFirstNumber + parsedSecondNumber).toFixed(maxLengthToFix);
  alert("Результат\n\n"+sum);
  return true;
}