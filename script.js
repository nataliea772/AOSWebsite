// JavaScript for modals
document.addEventListener('DOMContentLoaded', function () {
  const modals = document.querySelectorAll('.modal');
  const triggers = document.querySelectorAll('[data-modal]');
  const closeButtons = document.querySelectorAll('.close');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const modalId = this.dataset.modal;
      const modal = document.getElementById(modalId);
      modal.style.display = 'block';
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const modal = this.closest('.modal');
      modal.style.display = 'none';

      // Stop video if closing video modal
      const video = modal.querySelector('video');
      if (video) {
        video.pause();
      }
    });
  });

  // Close modal when clicking outside content area
  modals.forEach(modal => {
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';

        // Stop video if closing video modal
        const video = modal.querySelector('video');
        if (video) {
          video.pause();
        }
      }
    });
  });

  // Adjust video modal size
  const videoModals = document.querySelectorAll('.video-container');
  videoModals.forEach(videoModal => {
    const video = videoModal.querySelector('video');
    if (video) {
      videoModal.style.paddingBottom = (video.offsetHeight / video.offsetWidth) * 100 + '%';
    }
  });
});
