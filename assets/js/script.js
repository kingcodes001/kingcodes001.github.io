
$(document).ready(function () {
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



  // codes protection
  document.onkeydown = function(e) {
  // Disable F12
  if (e.keyCode === 123) {
    return false;
  }
  // Disable Ctrl+Shift+I
  if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
    return false;
  }
  // Disable Ctrl+Shift+J (for Chrome dev tools)
  if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
    return false;
  }
  // Disable Ctrl+U
  if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
    return false;
  }
};


