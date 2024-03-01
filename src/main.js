function showContent(pageId) {
    // Hide all content sections
    var contentSections = document.getElementsByClassName('page-content');
    for (var i = 0; i < contentSections.length; i++) {
      contentSections[i].style.display = 'none';
    }

    // Remove active class from all buttons
    var buttons = document.getElementsByClassName('btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('bg-cyan-200');
    }

    // Show the selected content section
    document.getElementById(pageId).style.display = 'block';

    // Add active class to the clicked button
    document.querySelectorAll('.btn').forEach(button => {
      if (button.id === pageId + '-btn'){
        button.classList.toggle('bg-cyan-200');
      }
    });
  
  }

document.getElementById('next-btn').addEventListener('click', function() {
    document.getElementById('info-section').style.display = 'none';
    document.getElementById('plan-section').style.display = 'block';
    document.getElementById('info-section-btn').classList.remove('bg-cyan-200');
    document.getElementById('plan-section-btn').classList.add('bg-cyan-200');
});

document.getElementById('prev-btn').addEventListener('click', function() {
    document.getElementById('info-section').style.display = 'block';
    document.getElementById('plan-section').style.display = 'none';
    document.getElementById('info-section-btn').classList.add('bg-cyan-200');
    document.getElementById('plan-section-btn').classList.remove('bg-cyan-200');
});

document.getElementById('next-btn2').addEventListener('click', function(e) {
  e.preventDefault();
    document.getElementById('plan-section').style.display = 'none';
    document.getElementById('add-ons-section').style.display = 'block';
    document.getElementById('plan-section-btn').classList.remove('bg-cyan-200');
    document.getElementById('add-ons-section-btn').classList.add('bg-cyan-200');
});

document.getElementById('prev-btn2').addEventListener('click', function() {
  document.getElementById('info-section').style.display = 'block';
  document.getElementById('plan-section').style.display = 'none';
  document.getElementById('info-section-btn').classList.add('bg-cyan-200');
  document.getElementById('plan-section-btn').classList.remove('bg-cyan-200');
});

  


 