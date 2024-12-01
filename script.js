$(document).ready(function() {
    // Smooth scrolling for anchor links
    $("nav ul li a").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $("html, body").animate({
                scrollTop: $(hash).offset().top - 50
            }, 800);
        }
    });

    // Form Validation (Optional)
    $("form").on("submit", function(event) {
        const name = $("input[name='name']").val();
        const email = $("input[name='email']").val();
        const message = $("textarea[name='message']").val();
        if (!name || !email || !message) {
            alert("Please fill in all the fields!");
            event.preventDefault();
        }
    });
});

