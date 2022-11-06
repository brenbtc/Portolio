//////////////////////////
// About Modal Section //
////////////////////////
const modalAbout = document.getElementById('aboutModal');
const aboutButton = document.getElementById('aboutBtn');
const spanAbout = document.getElementsByClassName("close")[0];

// About Click Modal
aboutButton.onclick = function() {
    modalAbout.style.display = "block";
}
// About Click [X]
spanAbout.onclick = function() {
    modalAbout.style.display = "none";
  }

//////////////////////////
//Resume Modal Section //
////////////////////////
const modalResume = document.getElementById('resumeModal');
const resumeButton = document.getElementById('resumeBtn');
const spanResume = document.getElementsByClassName("close")[1];

// Resume Click Modal
resumeButton.onclick = function() {
    modalResume.style.display = "block";
}
// Resume Click [X]
spanResume.onclick = function() {
    modalResume.style.display = "none";
  }

////////////////////////
//Contact Me Section //
//////////////////////
const modalContact = document.getElementById('contactModal');
const contactButton = document.getElementById('contactBtn');
const spanContact = document.getElementsByClassName("close")[2];

// Contact Click Modal
contactButton.onclick = function() {
    modalContact.style.display = "block";
}
// Contact Click [X]
spanContact.onclick = function() {
    modalContact.style.display = "none";
  }


/////////////////////////
//Project Button Link //
///////////////////////

function gotoLink(link) {
    location.href = link.value;
}


//Countdown 
//From YT Channel: Easy Tutorials
const countDown = new Date( "Jan 23, 2023 12:45:32" ).getTime();
const x = setInterval(function(){
  const now = new Date().getTime();
  const distance = countDown - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds =Math.floor((distance % (1000 * 60)) / 1000 );

  document.getElementById("pjLaunch").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("pjLaunch").innerHTML = "OUT NOW"
    }

}, 1000);
  
