

function checkButton() {  
    if(document.getElementById('option_one').checked) { 
        document.getElementById("reveal-if-active").innerHTML 
            = ""  
    } 
    else if(document.getElementById('option_two').checked) { 
        document.getElementById("reveal-if-active").innerHTML 
            = ""
    } 
    else if(document.getElementById('option_three').checked) { 
            document.getElementById("reveal-if-active").innerHTML 
            = "<br> <label for='hourlyRate'>Hourly Rate</label><input type='text' id='hourlyRate' name='hourlyRate' placeholder='Hourly Rate here...' required pattern='[0-9]+'/>"
    } 
} 