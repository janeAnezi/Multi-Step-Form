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

  // onclick to toggle add-ons monthly / yeraly
  let toggleBtn = document.getElementById('toggle-btn');
  let yearlyPlan  = document.getElementById("yearly-plan");
  toggleBtn.addEventListener( "click", ()=>{
    window.onload = function() {
      showContent('info-section');
      };
    
    // if (selectBox.value == "monthly"){
    //   selectBox.value = "yearly";
    //   document.getElementById("price").innerHTML = "$19/mo";
    //   } else {
    //     selectBox.value = "monthly";
    //   }
    });

 