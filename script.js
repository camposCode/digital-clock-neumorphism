


setInterval(function(){

    /* *******VARIABLES****** */

    const clock = document.querySelector(".display");
    let time = new Date();
    let sec =   time.getSeconds();
    let hours = time.getHours();
    let min = time.getMinutes();
    let day = "AM";

    /* *******CONDITIONS****** */
    if(hours > 12){
        day = "PM";
        hours = hours - 12;
    }

    if(hours == 0){
        hours = 12;
    }

    if(hours < 10){
        hours = "0" + hours;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(sec < 10){
        sec = "0" + sec;
    }

    /* *******DOM MANIPULATION****** */
    clock.textContent = hours + " : " + min + " : " + sec + " " + day;
});









