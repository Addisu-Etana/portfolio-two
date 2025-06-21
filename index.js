const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

const opentab = (tabname, event) => {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
};
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const navbar = document.querySelector(".navbar");
//menuopen
menuOpen.addEventListener("click", () => {
  navbar.classList.add("show");
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
});
//menuclose
menuClose.addEventListener("click", () => {
  navbar.classList.remove("show");
  menuOpen.style.display = "block";
  menuClose.style.display = "none";
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwjn9gn3MEeuCdRIb2Ff_KBUSwrX3kp1x4tSt1zHPYARpKZfUl3lziUhrmCxP9T30uGdQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
        msg.innerHTML = " ";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
