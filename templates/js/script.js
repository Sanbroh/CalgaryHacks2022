var time = -1;
var counting = false;

function submitForm() {
  counter = Math.ceil(document.getElementById('interview-time').value * 60);

  if (counter) {
    document.getElementById("countdown").innerHTML = counter;
    setTime(counter);
    if (!counting) startCount();
  } else {
    document.getElementById("countdown").innerHTML = "SET";
  }

  document.getElementById("interview-overlay").style.animation = "infoFadeOut linear 0.5s";
  setTimeout(function() {
    document.getElementById("interview-overlay").style.display = "none";
    document.getElementById("interview-overlay").style.animation = "none";
  }, 500);
  return false;
}

function closeForm() {
  document.getElementById("interview-overlay").style.animation = "infoFadeOut linear 0.5s";
  setTimeout(function() {
    document.getElementById("interview-overlay").style.display = "none";
    document.getElementById("interview-overlay").style.animation = "none";
  }, 500);
}

function openForm() {
  document.getElementById("interview-overlay").style.display = "block";
}

function setTime(n) {
  time = n;
}

function startCount() {
  if (!counting) {
    var x = setInterval(function() {
      if (time < 1) {
        setTime(0);
        document.getElementById("countdown").innerHTML = "0";
        document.getElementById("countdown-comment").innerHTML = "seconds before your interview, good luck!";
        counting = false;
      } else {
        counting = true;
        setTime(time-1);
        document.getElementById("countdown").innerHTML = time;
        document.getElementById("countdown-comment").innerHTML = "seconds before your interview";
      }
    }, 1000);
  }
}
