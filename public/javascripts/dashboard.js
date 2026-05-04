// navbar
 const toggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });


/* FILTER MODAL */
function openFilterModal() {
    document.getElementById("filterModal").style.display = "flex";
}

function closeFilterModal() {
    document.getElementById("filterModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("filterModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// reset filters
function resetFilters() {
    window.location.href = "/dashboard"; 
}
