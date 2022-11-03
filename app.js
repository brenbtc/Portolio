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
// About Click Outside 
window.onclick = function(event) {
    if (event.target == modalAbout) {
      modalAbout.style.display = "none";
    }
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
// Resume Click Outside 
window.onclick = function(event) {
    if (event.target == modalResume) {
      modalResume.style.display = "none";
    }
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
// Contact Click Outside 
window.onclick = function(event) {
    if (event.target == modalContact) {
      modalContact.style.display = "none";
    }
  }




