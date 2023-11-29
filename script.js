function predict() {
  document.getElementById('result').style.backgroundColor="rgb(208 242 136 / 73%)"
  const soilType = document.getElementById('soilSelect').value
  const crop = document.getElementById('cropSelect').value
  const Nitrogen = document.getElementById('nitrogenValue').value
  const Phosphorous = document.getElementById('potassiumValue').value
  const Potassium = document.getElementById('phosphorousValue').value
  fetch(`https://2m9vw4li1j.execute-api.ap-south-1.amazonaws.com/default/fertilizers?soilType=${soilType}&cropType=${crop}&nitrogen=${Nitrogen}&potassium=${Potassium}&phosphorous=${Phosphorous}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    document.getElementById('result').innerText = data.prediction + " fertilizer"
    document.getElementById('result').style.backgroundColor="transparent"
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}
// JavaScript to handle +/- buttons
$(document).ready(function () {
  $(".plus").click(function () {
    var numberElement = $(this).siblings(".input-field");
    var currentNumber = parseFloat(numberElement.val());
    numberElement.val((currentNumber + 1));
  });

  $(".minus").click(function () {
    var numberElement = $(this).siblings(".input-field");
    var currentNumber = parseFloat(numberElement.val());
    if (currentNumber > 0) {
      numberElement.val((currentNumber - 1));
    }
  });
});