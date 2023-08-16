var sidemenu = document.getElementById("sidemenu");
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

//Hamburger menu script

function openmenu() {
  sidemenu.style.right = "0px";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

//About me section script

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");

  document.getElementById(tabname).classList.add("active-tab");
}

//Contact Form script, credit to https://github.com/jamiewilson/form-to-google-sheets

const scriptURL =
  "https://script.google.com/macros/s/AKfycby57gA5-SQVaen329zycMWyrEmeKd_cbSQjYuSG9eMQTkV53tu2tcviKVZO94yLECOdDg/exec";
const form = document.forms["submit-to-google-sheet"];

const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
    (response) => {
      msg.innerHTML = "Message Sent!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset().catch((error) => console.error("Error!", error.message));
    }
  );
});
