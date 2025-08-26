// Toggle mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// fetch('data.json')
//    .then(response => response.json())
//    .then(data => {
//        document.getElementById("name").textContent = data.name;
//        document.getElementById("surname").textContent = data.surname;
//    });

fetch('Data/Personal.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("name").textContent = data.name;
        document.getElementById("surname").textContent = data.surname;
        document.getElementById("role").textContent = data.title;
})
.catch(error => console.error('Error fetching personal data:', error));