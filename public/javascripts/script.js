// ===== 700px Toggle - Navbar =====
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== Get Started Button -> Open Login Modal =====
const getStartedBtn = document.getElementById("getStartedBtn");
const loginModal = document.getElementById("loginModal");
const closeModalBtn = document.getElementById("closeModalBtn");

getStartedBtn.addEventListener("click", () => {
  loginModal.classList.add("show");
});

// Close modal button
closeModalBtn.addEventListener("click", () => {
  loginModal.classList.remove("show");
});

// Close modal when clicking outside card
loginModal.addEventListener("click", (e) => {
  console.log(e);
  if(e.target === loginModal){
    loginModal.classList.remove("show");
  }
});

