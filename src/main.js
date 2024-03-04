// Variable to track plan selection
var yearlyPlanSelected = false;

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

   // Check if yearly plan is selected and update display accordingly
   if (yearlyPlanSelected) {
    document.querySelectorAll('.monthly-plan').forEach(plan => {
        plan.style.display = 'none';
    });
    document.querySelectorAll('.yearly-plan').forEach(plan => {
        plan.style.display = 'block';
    });
} else {
    document.querySelectorAll('.yearly-plan').forEach(plan => {
        plan.style.display = 'none';
    });
    document.querySelectorAll('.monthly-plan').forEach(plan => {
        plan.style.display = 'block';
    });
}
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

document.getElementById('prev-btn2').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('plan-section').style.display = 'block';
  document.getElementById('add-ons-section').style.display = 'none';
  document.getElementById('add-ons-section-btn').classList.remove('bg-cyan-200');
  document.getElementById('plan-section-btn').classList.add('bg-cyan-200');
});

document.getElementById('next-btn3').addEventListener('click', function(e) {
  e.preventDefault();
    document.getElementById('summary-section').style.display = 'block';
    document.getElementById('add-ons-section').style.display = 'none';
    document.getElementById('summary-section-btn').classList.add('bg-cyan-200');
    document.getElementById('add-ons-section-btn').classList.remove('bg-cyan-200');
});

document.getElementById('prev-btn3').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('summary-section').style.display = 'none';
  document.getElementById('add-ons-section').style.display = 'block';
  document.getElementById('summary-section-btn').classList.remove('bg-cyan-200');
  document.getElementById('add-ons-section-btn').classList.add('bg-cyan-200');
});

// toggle year && month
document.getElementById('toggle-year').addEventListener('click', function() {
  document.getElementById('toggle-year').style.display = 'none';
  document.querySelector('.yearly-form').style.display = 'none';
  document.querySelector('.yearly').style.color = 'grey';
  document.querySelector('.monthly').style.color = 'black';
  document.querySelector('.monthly-form').style.display = 'block';
  document.getElementById('toggle-month').style.display = 'block';
})
document.getElementById('toggle-month').addEventListener('click', function() {
  document.querySelector('.monthly-form').style.display = 'none';
  document.querySelector('.yearly').style.color = 'black';
  document.querySelector('.monthly').style.color = 'grey';
  document.getElementById('toggle-month').style.display = 'none';
  document.getElementById('toggle-year').style.display = 'block';
  document.querySelector('.yearly-form').style.display = 'block';
})

// confirm button
document.getElementById('confirm-btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.getElementById('summary-section').style.display = 'none';
  document.querySelector('.thank-you').style.display = 'block';
})