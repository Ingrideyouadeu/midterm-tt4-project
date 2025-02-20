document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            alert(this.closest(".card").querySelector(".card-title").innerText + " added to cart!");
        });
    });
});
 
