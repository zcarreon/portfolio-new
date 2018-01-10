(function(){
    var designCont = document.querySelector("#desCon");

    function openLightbox(){
      console.log("Open Lightbox");
    };

    designCont.addEventListener('click', openLightbox, false);
})();
