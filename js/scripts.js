/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// JavaScript for Interests Section
function flipCard(card) {
    card.querySelector('.flip-card-inner').style.transform = 'rotateY(180deg)';
}


<script>
    // Function to load the Credly badge
    function loadCredlyBadge() {
        var credlyBadgeContainer = document.getElementById("credly-badge-container");
        if (credlyBadgeContainer) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = "//cdn.credly.com/assets/utilities/embed.js";
            credlyBadgeContainer.appendChild(script);
        }
    }

    // Call the function to load the Credly badge
    loadCredlyBadge();
</script>


