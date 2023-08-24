var buttons = document.querySelectorAll(".b1");
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        var originalText = button.textContent;

        button.textContent = "Subscribed";
    });
}); 