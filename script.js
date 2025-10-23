const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const country = document.getElementById('country').value.trim();
    const comments = document.getElementById('comments').value.trim();

    if(fullname === "" || email === "" || country === "" || comments === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    alert("Thank you! Your message has been submitted successfully.");

    form.reset();
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

if (backToTopBtn) {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    backToTopBtn.addEventListener('click', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}
