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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;
    const comments = document.getElementById('comments').value;

    // Validate form fields
    if (!fullname || !email || !country || !comments) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        fullname: fullname,
        email: email,
        country: country,
        comments: comments
    }).then(function(response) {
        alert('Your message has been sent successfully!');
        document.getElementById('contactForm').reset(); // Reset the form
    }, function(error) {
        alert('Failed to send your message. Please try again later.');
    });
});
