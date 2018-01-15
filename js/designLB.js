(function(){
    var designBox = document.querySelector('#desCon');
    var lightbox = document.querySelector('.lightbox');

    function openLightboxDesign() {
      //console.log('Opening Design Lightbox.');
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      lightbox.style.display = 'block';
      let lightboxImg = lightbox.querySelector('img');
      let lightboxClose = lightbox.querySelector('.close-lightbox');
      let lightboxH2 = lightbox.querySelector('h2');
      let lightboxDesc = lightbox.querySelector('p');
      lightboxImg.src = 'images/obj-desktop.png';
      lightboxH2.innerHTML = "Odell Beckham Jr. Website";
      lightboxDesc.innerHTML = "This is a preview for design I did for NFL superstar, Odell Beckham Jr. The site is designed around the idea of angles. The angles symbolize his legendary catch and give the site and brand a dynamic feel. I also designed a new logo for the brand. The logo is designed after Odell's signature. You can see that every letter of his initials are incorperated and even his player number.";
      lightboxClose.addEventListener('click', closeLightbox, false);
    }

    function closeLightbox() {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'visible';
      let lightboxImg = lightbox.querySelector('img');
      let lightboxH2 = lightbox.querySelector('h2');
      let lightboxDesc = lightbox.querySelector('p');
      lightboxImg.src = "";
      lightboxH2.innerHTML = "";
      lightboxDesc.innerHTM = "";
    }

    designBox.addEventListener('click', openLightboxDesign, false);
})();
