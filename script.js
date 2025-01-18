document.addEventListener("DOMContentLoaded", function() {
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const closeSidebarButton = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');

    var screenWidth = window.innerWidth; 
    var messageElement = document.getElementById('subB'); 
    if (screenWidth < 1000) { 
        messageElement.innerText = "\u2192"; 
    } else {
        messageElement.innerText = "Subscribe \u2192"; 
    }

    toggleSidebarButton.addEventListener('click', () => {
        sidebar.classList.add('sidebar-open');
        document.querySelector('.scroll-button').style.zIndex = '-1'
        document.querySelector('.scroll-container').style.zIndex = '-1'
        document.querySelector('.hero-text').style.zIndex = '-1'
    });

    closeSidebarButton.addEventListener('click', () => {
        sidebar.classList.remove('sidebar-open');
        document.querySelector('.scroll-button').style.zIndex = '15'
        document.querySelector('.scroll-container').style.zIndex = '10'
        document.querySelector('.hero-text').style.zIndex = '10'
    });

    const scrollButton = document.getElementById("scrollButton");
    const scrollAmount = 810; // Amount to scroll down

    // Function to toggle button visibility based on scroll position
    function toggleButtonVisibility() {
        if (window.scrollY === 0) {
            scrollButton.classList.remove("hidden");
        } else {
            scrollButton.classList.add("hidden");
        }
    }

    // Scroll down and hide button when clicked
    scrollButton.addEventListener("click", function() {
        window.scrollBy({
            top: scrollAmount,
            left: 0,
            behavior: 'smooth'
        });
        scrollButton.classList.add("hidden");
    });

    // Show button when scrolled to the top and hide when scrolling down
    window.addEventListener("scroll", toggleButtonVisibility);

    // Initial check to ensure the button is visible on load
    toggleButtonVisibility();
    

    const scrollText = document.querySelectorAll('.scroll-text span');
    const text1 = "   !!!   ESOM IS NOW RECRUITING   !!!   "; 

    scrollText.forEach((e)=>e.textContent = text1.repeat(2));
    const text = "ESOM";
    const typewriterText = document.getElementById("typewriter-text");
    let index = 0;
    
    function type() {
        if (index < text.length) {
            typewriterText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }
    
    function erase() {
        if (index > 0) {
            typewriterText.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(erase, 100);
        } else {
            setTimeout(type, 1000);
        }
    }
    window.dispatchEvent(new Event('resize'));
    type();
});
