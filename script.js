document.addEventListener('DOMContentLoaded', function() {
  // Modal functionality
  var modals = document.querySelectorAll('.modal');
  var modalTriggers = document.querySelectorAll('[data-modal]');
  var closeButton = document.querySelectorAll('.close');

  modalTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
      event.preventDefault();
      var modalTarget = trigger.getAttribute('data-modal');
      var modal = document.getElementById(modalTarget);
      modal.style.display = 'block';
    });
  });

  closeButton.forEach(function(button) {
    button.addEventListener('click', function() {
      var modal = button.closest('.modal');
      modal.style.display = 'none';
    });
  });

  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });

  // Q&A Form and List
  var qaForm = document.getElementById('qaForm');
  var qaList = document.getElementById('qaList');

  qaForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var questionInput = document.getElementById('question');
    var questionText = questionInput.value.trim();

    if (questionText !== '') {
      var listItem = document.createElement('li');
      listItem.classList.add('qa-item');
      listItem.innerHTML = `
        <div class="question">
          <strong>Question:</strong> ${questionText}
          <ul class="answers"></ul>
          <form class="answer-form">
            <input type="text" class="answer-input" placeholder="Write an answer...">
            <button type="submit" class="answer-submit">Add Answer</button>
          </form>
        </div>
      `;
      qaList.appendChild(listItem);
      questionInput.value = '';

      // Handle answer submission for this question
      var answerForm = listItem.querySelector('.answer-form');
      var answerList = listItem.querySelector('.answers');

      answerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var answerInput = listItem.querySelector('.answer-input');
        var answerText = answerInput.value.trim();

        if (answerText !== '') {
          var answerItem = document.createElement('li');
          answerItem.classList.add('answer-item');
          answerItem.textContent = answerText;
          answerList.appendChild(answerItem);
          answerInput.value = '';
        }
      });
    }
  });
});
