console.log("js/script.js connected");

// DARK MODE
const themeToggle = document.getElementById("modeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    themeToggle.textContent =
        document.body.classList.contains("dark-mode")
        ? "Toggle Light Mode"
        : "Toggle Dark Mode";
});

// SKILLS TOGGLE
const toggleSkills = document.getElementById("toggleSkills");
const skillsSection = document.getElementById("skillsContent");

skillsSection.classList.add("hidden");

toggleSkills.addEventListener("click", () => {
    skillsSection.classList.toggle("hidden");
});

// FORM VALIDATION
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please fill in all required fields.");
    } else {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    }
});