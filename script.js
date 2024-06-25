function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function() {
    const profileTexts = document.querySelectorAll(".section__text > *");

    // Function to split text into letters and animate them
    function animateLetters(element) {
        const text = element.textContent.trim();
        element.textContent = ""; // Clear the content

        // Split the text into letters
        const letters = text.split("");

        // Iterate through each letter and wrap it with a span
        letters.forEach((letter, index) => {
            const span = document.createElement("span");
            span.textContent = letter;
            span.style.opacity = 0;
            element.appendChild(span);

            // Add a delay for each letter
            setTimeout(() => {
                span.style.opacity = 1;
            }, index * 50); // Adjust the delay (in milliseconds) between each letter here
        });
    }

    // Function to show each text one by one
    function showTexts(index) {
        if (index < profileTexts.length) {
            profileTexts[index].style.display = "block";
            animateLetters(profileTexts[index]); // Animate letters inside each text
            setTimeout(function() {
                showTexts(index + 1);
            }, 2000); // Adjust the delay (in milliseconds) between each text here
        }
    }

    // Initially hide all texts
    profileTexts.forEach(text => {
        text.style.display = "none";
    });

    // Call the function to start showing the texts
    showTexts(0);
});



