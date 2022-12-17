console.log("Welcome to responsive website")
// let btn1 = document.getElementsByClassName("menu-icon-btn")
// btn1.addEventListener("click", myBtn);
// function myBtn() {
//     console.log("Button is clicked")
//   }
// document.getElementById("mybtn").addEventListener("click", displayHeader);
// function displayHeader() {

// }

let navbar = document.getElementById('navbar');
function ani() {
  let navbar = document.getElementById('navbar');
  if (navbar.className != 'navbarPush high navbar') {
    navbar.className = 'navbarPush high navbar';
  }
  else (
    navbar.className = 'navbarShrink low navbar'
  )
}
function clickedAni() {  
  document.getElementById('mybtn').click()
}