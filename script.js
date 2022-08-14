function checkButton() {
  if (document.getElementById("option1").checked) {
    document.getElementById("reveal-if-active").innerHTML = "";
  } else if (document.getElementById("option2").checked) {
    document.getElementById("reveal-if-active").innerHTML = "";
  } else if (document.getElementById("option3").checked) {
    document.getElementById("reveal-if-active").innerHTML =
      "<br> <label for='hourlyRate'>Hourly Rate</label><input type='text' id='hourlyRate' name='hourlyRate' placeholder='Hourly Rate here...' required pattern='[0-9]+'/>";
  }
}
