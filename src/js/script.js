function openNav() {
  document.getElementById("sideBar").style.width = "100%";
  document.getElementById("sideNav").style.width = "75%";
}
/*Close navigation*/
function exitNav() {
  document.getElementById("sideBar").style.width = "0";
  document.getElementById("sideNav").style.width = "0";
}



 let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelector('.slider');
        const totalSlides = slides.children.length;

        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000); // Change slide every 3 seconds
