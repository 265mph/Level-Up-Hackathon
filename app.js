const alertIcon = document.querySelector(".alert-icon");
const alertDropDown = document.querySelector(".alert-dropdown");
const profileDetails = document.querySelector(".profile-details");
const profileDropDown = document.querySelector(".profile-details-dropdown");
const trialBanner = document.querySelector(".trial-banner");
const closeBtn = document.querySelector(".close-btn")
const searchBoxInput = document.getElementById("search-input")
const searchArea = document.querySelector(".search-bar")
const collapseBtn = document.querySelector(".collapse-btn")
const collapseGuide = document.querySelector(".collapse-guide");
const expandGuide = document.querySelector(".expand-guide");
const accordionContainer = document.querySelector(".accordion-container")
const accordionItem = document.querySelector(".accordion-item")


//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//GIVING THE SEARCH BAR AREA FOCUS
const searchActive = () => {
    searchBoxInput.addEventListener('focus', () => {
        searchArea.style.border = "2px solid #e1e1e1"
    })
    
    searchBoxInput.addEventListener('blur', () => {
        searchArea.style.border = "2px solid #616161"
    })
}

searchActive();



//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//TOGGLING THE NOTIFICATION DROPDOWN
const alertOptions = alertDropDown.querySelectorAll('[role="menuitem"]');

alertIcon.addEventListener('click', function (event) {
    if (alertIcon.contains(event.target) && alertDropDown.style.display === 'inline-flex') {
        alertDropDown.style.display = 'none';
    } else if (alertIcon.contains(event.target)) {
        alertDropDown.style.display = 'inline-flex';
        alertOptions.item(0).focus()
    }

    if (profileDropDown.style.display === 'block') {
        profileDropDown.style.display = 'none';
    }

    const isExpanded = alertIcon.attributes["aria-expanded"].value === "true";

    if (isExpanded) {
        alertIcon.ariaExpanded = "false"
    } else {
        alertIcon.ariaExpanded = "true"
    }
});

//CLOSING THE NOTIFICATION DROPDOWN WITH ESCAPE KEY
alertDropDown.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
        alertDropDown.style.display = 'none'
        alertIcon.focus()
    }
})




//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//TOGGLING THE PROFILE DETAILS DROPDOWN
profileDetails.addEventListener('click', function (event) {
    if (profileDetails.contains(event.target) && profileDropDown.style.display === 'block') {
      profileDropDown.style.display = 'none';
    } else if (profileDetails.contains(event.target)) {
        profileDropDown.style.display = 'block';
        pdOptions.item(0).focus()
    }

    if (alertDropDown.style.display === 'inline-flex') {
        alertDropDown.style.display = 'none';
    }

    const isExpanded = profileDetails.attributes["aria-expanded"].value === "true";

    if (isExpanded) {
        profileDetails.ariaExpanded = "false"
    } else {
        profileDetails.ariaExpanded = "true"
    }
});

//CLOSING THE PROFILE DETAILS DROPDOWN WITH ESCAPE KEY
profileDropDown.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') {
        profileDropDown.style.display = 'none'
        profileDetails.focus()
    }
})

const pdOptions = profileDropDown.querySelectorAll('[role="menuitem"]');


//NAVIGATING THE DROPDOWN WITH ARROW KEYS
const navigatorFunc = (event, menuItemIndex) => {
    const isLastMenuItem = menuItemIndex === pdOptions.length -1;
    const isFirstMenuItem = menuItemIndex === 0;

    const nextMenuItem = pdOptions.item(menuItemIndex +1)
    const prevMenuItem = pdOptions.item(menuItemIndex -1)

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        if (isLastMenuItem) {
            pdOptions.item(0).focus()

            return;
        }

        nextMenuItem.focus();
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        if (isFirstMenuItem) {
            pdOptions.item(pdOptions.length-1).focus()

            return;
        }

        prevMenuItem.focus();
    }
}

pdOptions.forEach(function(menuitem, menuItemIndex) {
    menuitem.addEventListener('keyup', (event) => {
        navigatorFunc(event, menuItemIndex)
    })
});




//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
// CLOSING THE EXTEND TRIAL BANNER
closeBtn.addEventListener('click', () => {
    trialBanner.style.visibility = 'hidden';
})

closeBtn.addEventListener('keydown', function (event) {
    if(event.key === 'Enter' && document.activeElement === closeBtn) {
        trialBanner.style.visibility = 'hidden';
    }
})



//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//TOGGLING THE ACCORDION DISPLAY
collapseBtn.addEventListener('keyup', (event) => {
    if(event.key === 'ArrowUp') {
        accordionContainer.style.display = (accordionContainer.style.display === 'none') ? 'block' : 'none';
        expandGuide.style.display = (expandGuide.style.display === 'none') ? 'block' : 'none';
        collapseGuide.style.display = (collapseGuide.style.display === 'block') ? 'none' : 'block';

        collapseBtn.ariaExpanded = (collapseBtn.ariaExpanded === "true") ? 'false' : 'true'
    }
})

collapseBtn.addEventListener('click', () => {
    accordionContainer.style.display = (accordionContainer.style.display === 'none') ? 'block' : 'none';
    expandGuide.style.display = (expandGuide.style.display === 'none') ? 'block' : 'none';
    collapseGuide.style.display = (collapseGuide.style.display === 'block') ? 'none' : 'block';

    collapseBtn.ariaExpanded = (collapseBtn.ariaExpanded === "true") ? 'false' : 'true'
})



//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//OPENING ACCORDION ITEMS
const accordions = document.querySelectorAll(".accordion-item")

accordions.forEach((accord) => {
    accord.onclick = () => {
        accordions.forEach((subContent) => {
            subContent.classList.remove("active-accordion")
        })
        accord.classList.add("active-accordion");
    }
})

accordions.forEach((accord) => {
    accord.addEventListener('keyup', () => {
        accordions.forEach((subContent) => {
            subContent.classList.remove("active-accordion")
        })
        accord.classList.add("active-accordion");
    })
})


//NAVIGATING THE ACCORDION WITH ARROW KEYS
const accordSteps = accordionContainer.querySelectorAll('[role="menuitem"]');

const accordionNavigtor = (event, accItem) => {
    const isLastAccItem = accItem === accordionItem.length -1;
    const isFirstAccItem = accItem === 0;

    const nextAccItem = accordSteps.item(accItem +1)
    const prevAccItem = accordSteps.item(accItem -1)

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        if (isLastAccItem) {
            accordSteps.item(0).focus()

            return;
        }

        nextAccItem.focus();
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        if (isFirstAccItem) {
            accordSteps.item(accordSteps.length-1).focus()

            return;
        }

        prevAccItem.focus();
    }
}

accordSteps.forEach(function(menuitem, menuItemIndex) {
    menuitem.addEventListener('keyup', (event) => {
        accordionNavigtor(event, menuItemIndex)
    })
});





//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//PROGRESS BAR
document.addEventListener('DOMContentLoaded', () => {
    let checkboxes = accordionContainer.querySelectorAll('input[type="checkbox"]');
    let progress = document.getElementById('stepProgress');
    let checkboxFraction = document.getElementById('checkboxFraction');

    let checkedCount = 0;
    let progressValue = 0;

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                checkedCount++;
                progressValue += 20;
            } else {
                checkedCount--;
                progressValue -= 20;
            }

            // Ensure the checked count is within bounds [0, checkboxes.length]
            checkedCount = Math.max(0, Math.min(checkedCount, 100));

            // Update the checkbox fraction text
            checkboxFraction.textContent = `${checkedCount} / 5`;

            progress.value = progressValue;
        });
    });
})

