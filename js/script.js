/* latestDate */ var ld = Date.parse("Aug 24, 2021 23:59:00 +12:00")
/* currentLockdownStart */ var cls = Date.parse("17 Aug, 2021 23:59:00 +12:00")
/* countDownDate */ var cdd;
/* percentageOfLockdownThrough */ var pt;
/* a_ */ var a_;
/* b_ */ var b_;
// Update the count down every 1 second
function setDateStuff(ds /* dateStringThing */ ) {
  cdd = new Date(ds).getTime();

  //START
  var loop = () => {
    // Get today's date and time
    var now = new Date().getTime();
    a_ = cdd  - cls;
    b_ = now - cls;

    pt = (b_ / a_) * 100;
    pt =
      pt <= 100 ? pt : 100;
    document.getElementById(
      "percentageThrough"
    ).innerHTML = `We are ${Math.floor(
      pt
    )}% of the way through lockdown`;
    //// console.log(`percentage: ${100-((cdd-now)*100)}%`)
    // Find the distance between now and the count down date
    var distance = cdd - now;

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
    document.getElementById("demo").innerHTML = fds;
    document.title = `${fds} - Countdown`;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
      document.title = "EXPIRED";
    }
  }
  loop()
  var x = setInterval(loop, 1000);
}

setDateStuff(ld);
