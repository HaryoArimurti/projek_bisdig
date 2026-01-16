// Scroll ke bagian CTA
function scrollToCTA() {
    document.getElementById("cta").scrollIntoView({
        behavior: "smooth"
    });
}

// Klik fitur unggulan
function featureClick(featureName) {
    alert("Fitur dipilih: " + featureName);

    // reset semua card
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => card.classList.remove("active"));

    // aktifkan card yang diklik
    event.target.classList.add("active");
}

// Klik produk
function buyProduct(productName) {
    alert("Anda memilih produk: " + productName + "\nSilakan lanjut ke pemesanan.");
}

// Klik CTA
function showAlert() {
    alert("Terima kasih! Anda akan diarahkan ke halaman pemesanan.");
}


function buyProduct(product) {
    alert("Anda memilih membeli: " + product);
}

function scrollToCTA() {
    document.getElementById("cta").scrollIntoView({ behavior: "smooth" });
}

function showAlert() {
    alert("Terima kasih! Pesanan Anda akan diproses.");
}

function selectFeature(el) {
    el.style.backgroundColor = "#0d6efd";
    el.style.color = "white";
}

