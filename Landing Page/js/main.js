//contacts swiper
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
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});



//Scroll down button above nav bar when closed 
const btn = document.getElementById('btn');
const homeScroll = document.querySelector('.home-scroll');

btn.addEventListener('change', () => {
  homeScroll.classList.toggle('active', btn.checked); 
});



//mailing
(function(){
  emailjs.init("0HxRVAUccY3ZOEi5G");
  })();

function SendMail() {
  var params = {
    from_name : document.getElementById("contactName").value,
    email_id : document.getElementById("contactEmail").value,
    subject : document.getElementById("contactSubject").value,
    message : document.getElementById("contactMessage").value
  }

  emailjs.send('service_yis90ow', 'template_p73v2xx', params).then(function(response) {
    alert("Email sent successfully!");  
    document.getElementById("contactForm").reset();
  });
}

function SubscribeMail() {
  var params = {email_id : document.getElementById("mc-email").value}
  emailjs.send('service_yis90ow', 'template_dxvk6f5', params).then(function(response) {
    alert("Subscribed successfully!");  
    document.getElementById("mc-form").reset();
  });

  event.preventDefault();

}