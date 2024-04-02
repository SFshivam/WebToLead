let captchaChecked = false;
function beforeSubmit(event){
    if(captchaChecked){
    let setLeadDate = document.querySelector(".setLeadDate");
    let inputLeadDate = document.querySelector(".inputLeadDate");
    console.log(inputLeadDate.value);

    let formattedDate = new Date(inputLeadDate.value).toLocaleDateString("en-US");
    setLeadDate.value = formattedDate;
    }
    else{
        alert("Please check the recpatcha box to submit the form");
        
        //this method will stop the submission of the form
        event.preventDefault();
    }
}


function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } 
} 

setInterval(timestamp, 500); 

function captchasuccess{
    captchaChecked = true;
}