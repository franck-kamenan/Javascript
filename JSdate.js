// Date
var today = new Date();
var someday = new Date();
var day = someday.getDate();
var month = someday.getMonth() + 1;
var year = someday.getFullYear();

// Current time
var anyday = new Date();
var hours = anyday.getHours();
var minutes = anyday.getMinutes();
var seconds = anyday.getSeconds();

// Digital Clock
window.onload = function () {
    
    getTime();
}
function getTime() {
    
    var hotday = new Date();
    var hours = hotday.getHours();
    var minutes = hotday.getMinutes();
    var seconds = hotday.getSeconds();
    // add a zero in front of numbers < 10
    // m = checkTime(m);
    // s = checkTime(s);
    document.getElementById('digital').innerHTML = hours + ":" + minutes + ":" + seconds;
    setTimeout(function(){getTime()}, 1000);
}

// setInterval("getTime()", 1000); // another way
function checkTime(i) {

    if (i < 10) {
        
        i = "0" + i;
    }

    return i;
}