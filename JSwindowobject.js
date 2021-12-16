// Alert method
function msg() {
    
    alert("Hello Alert Box");
}

// Confirm method
function msg2() {
    
    var viviro = confirm("Are you sure?");
    if (viviro == true) {
        
        alert("ok");
    } else {

        alert("cancel");
    }
}

// Prompt method
function msg3() {
    
    var popo = prompt("Who are you?");
    alert("I am " + popo);
}

// Open method
function msg4() {
    
    open("https://www.youtube.com");
}

// Settimeout method
function msg5() {
    
    setTimeout(function() {
        
        alert("Welcome after 5 seconds")
    }, 5000);
}

// marche pas
// Close method
function msg6() {
    
    close();
}