const slider = document.getElementById('slider');
const navBtns = document.querySelectorAll('.nav-btn');

// 1. Fungsi Klik Tombol Navigasi
function scrollToPanel(index) {
    const width = slider.clientWidth;
    slider.scrollTo({ left: width * index, behavior: 'smooth' });
}

// 2. Fungsi Geser Otomatis (Update Tombol Saat Layar Di-swipe)
slider.addEventListener('scroll', () => {
    const width = slider.clientWidth;
    // Menghitung indeks panel yang paling dominan di layar
    const currentIndex = Math.round(slider.scrollLeft / width);
    
    navBtns.forEach((btn, i) => {
        btn.classList.toggle('active', i === currentIndex);
    });
});