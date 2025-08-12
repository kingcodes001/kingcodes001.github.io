
$(document).ready(function () {


  $(document).ready(function(){
    $(document).on("contextmenu",function(e){
      return false;
    });


        // Smooth scroll on click
    $('.navbar-nav li a').on('click', function (e) {
      e.preventDefault();
      const target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top - 50
      }, 500);
    });

    // Scroll spy logic
    $(window).on('scroll', function () {
      const scrollPos = $(document).scrollTop();
      $('.navbar-nav li a').each(function () {
        const section = $($(this).attr('href'));
        if (
          section.position().top - 60 <= scrollPos &&
          section.position().top + section.height() > scrollPos
        ) {
          $('.navbar-nav li a').removeClass('active');
          $(this).addClass('active');
        }
      });
    });

  $('#myForm').on('submit', function(e) {
    // Prevent the default form submission
    e.preventDefault();

    // Serialize the form data for submission (if you need it later)
    var formData = $(this).serialize();

    // Display the SweetAlert success message
    Swal.fire({
      title: 'Success!',
      text: 'Your form has been submitted.',
      icon: 'success',
      delay: 300
      // confirmButtonText: 'OK'
    });

    // Optional: After the user closes the alert, you can submit the form
    // Swal.fire(...).then((result) => {
    //   if (result.isConfirmed) {
    //     // Un-comment this line to submit the form after the alert is closed
    //     // this.submit();
    //   }
    // });
  });
  });


    $('#newsToggleBtn').click(function () {
      $('#newsOverlay').fadeIn();
    });

    $('#closeNews').click(function () {
      $('#newsOverlay').fadeOut();
    });
  });
  const skillBlocks = document.querySelectorAll('.skill-block');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.3 });

  skillBlocks.forEach(block => {
    block.style.animationPlayState = 'paused';
    observer.observe(block);
  });


  function openCommentModal() {
    const commentModal = new bootstrap.Modal(document.getElementById('commentModal'), {
      backdrop: 'static',
      keyboard: false
    });
    commentModal.show();
  }

  function closeCommentModal() {
    const commentModalEl = document.getElementById('commentModal');
    const modalInstance = bootstrap.Modal.getInstance(commentModalEl);
    modalInstance.hide();
  }



//   // codes protection
//   document.onkeydown = function(e) {
//   // Disable F12
//   if (e.keyCode === 123) {
//     return false;
//   }
//   // Disable Ctrl+Shift+I
//   if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
//     return false;
//   }
//   // Disable Ctrl+Shift+J (for Chrome dev tools)
//   if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
//     return false;
//   }
//   // Disable Ctrl+U
//   if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
//     return false;
//   }
// };
