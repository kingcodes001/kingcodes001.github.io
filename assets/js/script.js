
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