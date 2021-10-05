const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.work__step').forEach(function(work__step) {
      work__step.addEventListener('click', function(event){ 
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.step').forEach(function(el){ 
          el.classList.remove('step--active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('step--active')
      })
    })
    document.querySelector('.header__burger').addEventListener('click', function(){
      document.querySelector('.header__burger').classList.toggle('open')
      document.querySelector('.burger__menu').classList.toggle('burger__menu--active')
    })

})
