document.getElementById("departments-toggle").addEventListener("click", function () {
    var list = document.getElementById("departments-list");
    if (list.classList.contains("d-none")) {
        list.classList.remove("d-none");
    } else {
        list.classList.add("d-none");
    }
});

function changeImage(src) {
    document.getElementById("main-image").src = src;
    const thumbnails = document.querySelectorAll(".thumbnails .img-thumbnail");
    thumbnails.forEach((thumbnail) => {
        if (thumbnail.src === src) {
            thumbnail.style.border = "2px solid blue";
        } else {
            thumbnail.style.border = "none";
        }
    });
}

function changeQuantity(amount) {
    const quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity + amount >= 1) {
        quantityElement.textContent = quantity + amount;
    }
}
