document.addEventListener("DOMContentLoaded", function () {
  //initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  
  //smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });



  //scroll-down visibility toggle
  const btn = document.getElementById('btn');
  const homeScroll = document.querySelector('.home-scroll');

  if (btn && homeScroll) {
    btn.addEventListener('change', () => {
      homeScroll.classList.toggle('active', btn.checked);
    });
  }



  //initialize EmailJS with value from config.js
  emailjs.init(EMAILJS_USER_ID);

  //make these functions globally accessible
  window.SendMail = function () {
    var params = {
      from_name: document.getElementById("contactName").value,
      email_id: document.getElementById("contactEmail").value,
      subject: document.getElementById("contactSubject").value,
      message: document.getElementById("contactMessage").value,
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID_CONTACT, params)
      .then(function () {
        alert("Email sent successfully!");
        document.getElementById("contactForm").reset();
      })
      .catch(function (error) {
        alert("Email failed to send: " + error.text);
        document.getElementById("contactForm").reset();
      });
  };

  window.SubscribeMail = function (event) {
    event.preventDefault();

    var params = {
      email_id: document.getElementById("mc-email").value,
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID_SUBSCRIBE, params)
      .then(function () {
        alert("Subscribed successfully!");
        document.getElementById("mc-form").reset();
      })
      .catch(function (error) {
        alert("Subscription failed: " + error.text);
        document.getElementById("mc-form").reset();
      });
  };
});