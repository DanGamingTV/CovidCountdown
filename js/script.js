
// Update the count down every 1 second
function setDateStuff(setTitle, selector, percentageSelector, dateStringThing, currentLockdownStart) {
  var countdownDate = new Date(dateStringThing).getTime();

  //START
  var loop = () => {
    // Get today's date and time
    var now = new Date().getTime();
    if (percentageSelector != '') {
      var a_ = countdownDate  - currentLockdownStart;
    var b_ = now - currentLockdownStart;
    var pt = (b_ / a_) * 100;
    pt =
      pt <= 100 ? pt : 100;
    document.querySelector(
      percentageSelector
    ).innerHTML = `(${Math.floor(
      pt
    )}% of the way through lockdown)`;
    }
    
    //// console.log(`percentage: ${100-((countdownDate-now)*100)}%`)
    // Find the distance between now and the count down date
    var distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var d = Math.floor(distance / (1000 * 60 * 60 * 24)); /* days */
    var h = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) /* hours */
    );
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); /* minutes */
    var s = Math.floor((distance % (1000 * 60)) / 1000); /* seconds */

    // Output the result in an element with id="demo"
    //days > 0 ? `${days}d ` ? `` + hours > 0 ? `${hours} h` : ``
    var fds = /* formattedDateString */
      d + "d " + h + "h " + m + "m " + s + "s ";
    document.querySelector(selector).innerHTML = fds;
    if (setTitle) {
      document.title = `${fds} - Countdown`;
    }

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(selector).innerHTML = "EXPIRED";
      if (setTitle) {
        document.title = "EXPIRED";
      }
    }
  }
  loop()
  var x = setInterval(loop, 1000);
}