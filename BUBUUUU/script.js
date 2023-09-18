// Ambil elemen kartu
var card = document.querySelector('.card');

// Tambahkan event listener untuk hover mouse
card.addEventListener('mouseenter', function () {
    card.classList.add('hover');
});

card.addEventListener('mouseleave', function () {
    card.classList.remove('hover');
});
