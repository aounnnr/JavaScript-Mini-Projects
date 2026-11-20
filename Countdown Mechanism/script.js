let count = parseInt(prompt("Enter Seconds"));
let delay = parseInt(prompt("How much delay you want in the countdown (seconds)"));
delay = delay * 1000;
let countdown = setInterval(function(){
    if(count >= 1){
        count--;
        console.log(count);
    }
    else{
        clearInterval(countdown);
    }
},delay);