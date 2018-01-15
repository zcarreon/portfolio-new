(function(){
    var designBox = document.querySelector('#desCon');
    var illustrationBox = document.querySelector('#illCon');
    var lightbox = document.querySelector('.lightbox');
    var lightboxClose = lightbox.querySelector('.close-lightbox');
    var nextButton = document.querySelector('.next');
    var prevButton = document.querySelector('.prev');
    var slideIndex = 1;

    function openLightboxDesign() {
      //console.log('Opening Design Lightbox.');
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      lightbox.style.display = 'block';
      let lightboxImg = lightbox.querySelector('img');
      let lightboxH2 = lightbox.querySelector('h2');
      let lightboxDesc = lightbox.querySelector('p');
      lightboxImg.src = 'images/obj-desktop.png';
      lightboxH2.innerHTML = "Odell Beckham Jr. Website";
      lightboxDesc.innerHTML = "This is a preview for design I did for NFL superstar, Odell Beckham Jr. The site is designed around the idea of angles. The angles symbolize his legendary catch and give the site and brand a dynamic feel. I also designed a new logo for the brand. The logo is designed after Odell's signature. You can see that every letter of his initials are incorperated and even his player number.";
      lightboxDesc.style.borderTop = "1px solid #fff";
    };

    function openLightboxIllust() {
      //console.log('Opening Illustrator Lightbox.');
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      lightbox.style.display = 'block';
      showSlides(slideIndex);
    };

    function closeLightbox() {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'visible';
      let lightboxImg = lightbox.querySelector('img');
      let lightboxH2 = lightbox.querySelector('h2');
      let lightboxDesc = lightbox.querySelector('p');
      let lightboxGallery = lightbox.querySelector('#illustGallery');
      lightboxGallery.style.display = 'none';
      lightboxImg.src = "";
      lightboxH2.innerHTML = "";
      lightboxDesc.innerHTML = "";
      lightboxDesc.style.border = "none";

    };

    function showSlides(n) {
      //debugger;
      var i;
      var slides = document.querySelectorAll('.illustSlides');
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = 'block';
    };

    function plusSlides(n) {
      //console.log('FUCK THIS SHIT');
      showSlides(slideIndex += n);
    };

    function minusSlides(n) {
      //console.log('FUCK THAT SHIT');
      showSlides(slideIndex += n);
    };

    designBox.addEventListener('click', openLightboxDesign, false);
    illustrationBox.addEventListener('click', openLightboxIllust, false);
    lightboxClose.addEventListener('click', closeLightbox, false);
    nextButton.addEventListener('click', plusSlides, false);
    prevButton.addEventListener('click', minusSlides, false);
})();
