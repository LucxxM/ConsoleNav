var togglePart = document.getElementById("toggle-part");
var togglePartDiv = document.getElementById("toggle-part-div");
var btnDiv = document.getElementsByTagName("a");
var fakeInsert1 = document.getElementById("fake-insert1");
var fakeInsert2 = document.getElementById("fake-insert2");
var textPlace = document.getElementById("textPlace");
var textPlace2 = document.getElementById("textPlace2");
var toggleNavbar = document.getElementById("navbar");
var toggleBtn = document.getElementById("btnToggle");

function toggleMyPart() {
  togglePart.classList.toggle("display-none");
  togglePartDiv.classList.toggle("display-none");
  if (fakeInsert1.classList.contains("display-none")){
    fakeInsert1.classList.remove("display-none")
  }else {
    fakeInsert1.classList.add("display-none");
  }
  if (fakeInsert2.classList.contains("display-none")){
    fakeInsert2.classList.remove("display-none")
  }else {
    fakeInsert2.classList.add("display-none");
  }
}

document.querySelectorAll("div.navbar-div").forEach(function (link) {
  link.addEventListener("click", onClickForToggle);
});

function onClickForToggle(e) {
  var slideThis = this;

  textPlace.setAttribute("data-text", "[" +this.id + "]....");
  
  window.location.href = "https://lucxxm.github.io/ConsoleNav/#"+this.id+"1";
  e.preventDefault();
}

function closeIt() {
  toggleNavbar.classList.add("display-none");
  togglePart.classList.add("display-none");
  toggleBtn.classList.remove("display-none");
}

function openIt() {
  if (togglePartDiv.classList.contains("display-none")) {
    togglePartDiv.classList.remove("display-none");
    fakeInsert1.classList.remove("display-none");
    fakeInsert2.classList.add("display-none");
  }
  toggleNavbar.classList.remove("display-none");
  toggleBtn.classList.add("display-none");
}

function  toggleTextPlace(){
  textPlace.setAttribute("data-text", "[" + this.id + "]....");

  window.location.href = "https://lucxxm.github.io/ConsoleNav/#"+this.id+"1";
}

document.querySelectorAll("div.navbar-divTest").forEach(function (link) {
  link.addEventListener("click", toggleTextPlace);
});