function CountDownTimer(duration, granularity) {
  this.duration = duration;
  this.granularity = granularity || 1000;
  this.tickFtns = [];
  this.running = false;
}

CountDownTimer.prototype.pause = function() {
    this.running = false;
}

CountDownTimer.prototype.start = function() {
  if (this.running) {
    return;
  }
  this.running = true;
  var start = Date.now(),
      that = this,
      diff, obj;

  (function timer() {
    diff = that.duration - (((Date.now() - start) / 1000) | 0);

    if (diff > 0) {
      setTimeout(timer, that.granularity);
    } else {
      diff = 0;
      that.running = false;
    }

    obj = CountDownTimer.parse(diff);
    that.tickFtns.forEach(function(ftn) {
      ftn.call(this, obj.minutes, obj.seconds);
    }, that);
  }());
};

CountDownTimer.prototype.onTick = function(ftn) {
  if (typeof ftn === 'function') {
    this.tickFtns.push(ftn);
  }
  return this;
};

CountDownTimer.prototype.expired = function() {
  return !this.running;
};

CountDownTimer.parse = function(seconds) {
  return {
    'minutes': (seconds / 60) | 0,
    'seconds': (seconds % 60) | 0
  };
};






function first() {
    document.getElementById("first").style.background = "red"
    document.getElementById("second").style.background = "#1B244A"
    document.getElementById("third").style.background = "#1B244A"
    document.getElementById("fourth").style.background = "#1B244A"
}

function second() {
    document.getElementById("first").style.background = "#1B244A"
    document.getElementById("second").style.background = "red"
    document.getElementById("third").style.background = "#1B244A"
    document.getElementById("fourth").style.background = "#1B244A"
}

function third() {
    document.getElementById("first").style.background = "#1B244A"
    document.getElementById("second").style.background = "#1B244A"
    document.getElementById("third").style.background = "red"
    document.getElementById("fourth").style.background = "#1B244A"
}

function fourth() {
    document.getElementById("first").style.background = "#1B244A"
    document.getElementById("second").style.background = "#1B244A"
    document.getElementById("third").style.background = "#1B244A"
    document.getElementById("fourth").style.background = "red"
    
}




window.onload = function() {

  var display = document.querySelector('#clock'),
    timer = new CountDownTimer(720);

  timer.onTick(format);
  
   document.getElementById('first').addEventListener('click', function () {
        timer.start();
    });
    document.getElementById('second').addEventListener('click', function () {
        timer.start();
    });
    document.getElementById('third').addEventListener('click', function () {
        timer.start();
    });
    document.getElementById('fourth').addEventListener('click', function () {
        timer.start();
    });

  function restart() {
    if (document.getElementById('first').addEventListener('click')) {
      setTimeout(function() {
        timer.start();
      }, 1000);
    }
    if (document.getElementById('second').addEventListener('click')) {
      setTimeout(function() {
        timer.start();
      }, 1000);
    }
    if (document.getElementById('third').addEventListener('click')) {
      setTimeout(function() {
        timer.start();
      }, 1000);
    }
    if (document.getElementById('fourth').addEventListener('click')) {
      setTimeout(function() {
        timer.start();
      }, 1000);
    }
  }

  function format(minutes, seconds) {
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = minutes + ':' + seconds;
  }
};




let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0


function highScore() {
    
    if (homeCount > guestCount) {
        document.getElementById("home-score").style.background = "#059669"
        document.getElementById("guest-score").style.background = "black"
    }
    if (guestCount > homeCount) {
        document.getElementById("guest-score").style.background = "#059669"
        document.getElementById("home-score").style.background = "black"
    }
    if (guestCount == homeCount) {
        document.getElementById("guest-score").style.background = "black"
        document.getElementById("home-score").style.background = "black"
    }
}


function home1() {
    homeCount += 1
    homeScore.textContent = homeCount
    highScore()
}

function home2() {
    homeCount += 2
    homeScore.textContent = homeCount
    highScore()
}

function home3() {
    homeCount += 3
    homeScore.textContent = homeCount
    highScore()
}

function guest1() {
    guestCount += 1
    guestScore.textContent = guestCount
    highScore()
}

function guest2() {
    guestCount += 2
    guestScore.textContent = guestCount
    highScore()
}

function guest3() {
    guestCount += 3
    guestScore.textContent = guestCount
    highScore()
}

function newGame() {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
    document.getElementById("guest-score").style.background = "black"
    document.getElementById("home-score").style.background = "black"
}

