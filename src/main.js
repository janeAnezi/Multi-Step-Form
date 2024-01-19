function showContent(pageId) {
    // Hide all content sections
    var contentSections = document.getElementsByClassName('page-content');
    for (var i = 0; i < contentSections.length; i++) {
      contentSections[i].style.display = 'none';
    }

    // Remove active class from all buttons
    var buttons = document.getElementsByClassName('btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }

    // Show the selected content section
    document.getElementById(pageId).style.display = 'block';

    // Add active class to the clicked button
    document.getElementsByClassName('btn' + pageId.slice(-1)).classList.add('active');
  }