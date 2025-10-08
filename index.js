$(function () {
  /*AOS Animation for all content*/
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true
  });
 /*This ensures the role I am aspring*/
  new Typed('#typed', {
    strings: [
      "Full Stack Java Developer",
      "Front End Developer",
      "WordPress Developer"
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  /*Smooth Scroll Navigation*/
  $('nav a').on('click', function (e) {
    e.preventDefault();

    const target = $(this).attr('href');
    const offset = $(target).offset()?.top - 80;
    $('html, body').animate({ scrollTop: offset }, 500);
    $('nav a').removeClass('active');
    $(this).addClass('active');
  });
  const sections = $('section');
 /*Adding 120 from current position*/
  $(window).on('scroll', function () {
    const scrollPos = $(window).scrollTop() + 120;

    sections.each(function () {
      const top = $(this).offset().top;
      const id = $(this).attr('id');
      if (scrollPos >= top) {
        $('nav a').removeClass('active');
        $(`nav a[href="#${id}"]`).addClass('active');
      }
    });
  }).trigger('scroll');

  /*Box Modal Functionality */
  const modal = $('#projectModal');
  const modalTitle = $('#modal-title');
  const modalDesc = $('#modal-desc');
  const modalLink = $('#modal-link');
  const closeBtn = $('.modal .close');

  $('.view-btn').on('click', function () {
    modalTitle.text($(this).data('title'));
    modalDesc.html($(this).data('desc'));
    modalLink.attr('href', $(this).data('link'));
    modal.show();
  });
  closeBtn.on('click', function () {
    modal.hide();
  });
  $(window).on('click', function (e) {
    if ($(e.target).is(modal)) {
      modal.hide();
    }
  });

  /*Contact Form*/
  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const subject = $('#subject').val().trim();
    const message = $('#message').val().trim();
    const msgBox = $('#contactMsg');

    if (!name || !email || !message) {
      msgBox.text('Please fill required fields.');
      return;
    }
    const payload = { name, email, subject, message };
    msgBox.text('Sending...');

    setTimeout(() => {
      msgBox.text('Thanks, your message was received. I will contact you soon.');
      $('#contactForm')[0].reset();
    }, 900);
  });

   /* Hire Button*/
  $('#hireBtn').on('click', function () {
    $('nav a[href="#contact"]').trigger('click');
  });
  
//DOM elements
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

// Toggle menu
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('show');

  if (navUl.classList.contains('show')) {
    menuToggle.textContent = '✕';
  } else {
    menuToggle.textContent = '☰';
  }
});

// Close menu:mobile size only
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (navUl.classList.contains('show')) {
      navUl.classList.remove('show');
      menuToggle.textContent = '☰';
    }
  });
});

});


