var countDownDate;
// Update the count down every 1 second
var pageLoad;
function setDateStuff(dateStringThing) {
  countDownDate = new Date(dateStringThing).getTime();
  pageLoad = new Date().getTime();

  //START
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();
    //// console.log(`percentage: ${100-((countDownDate-now)*100)}%`)
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    //days > 0 ? `${days}d ` ? `` + hours > 0 ? `${hours} h` : ``
    var formattedDateString =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("demo").innerHTML = formattedDateString;
    document.title = `${formattedDateString} - Countdown`;

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
      document.title = "EXPIRED";
      setTimeout(setNearTimeLoop, 2000);
    }
  }, 1000);

  //END
}

setDateStuff(latestDate);
