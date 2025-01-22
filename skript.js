let currentSection = 0;
let isScrolling = false;
const sections = document.querySelectorAll("section");
const radios = document.querySelectorAll("input[type='radio']");
const scrollDelay = 600;  // Delay to prevent rapid scrolling triggers

// Function to handle smooth scrolling to the section
const scrollToSection = (index) => {
    if (isScrolling || index === currentSection) return;
    isScrolling = true;

    // Uncheck all radios and check the one for the current section
    radios.forEach((radio, idx) => {
        radio.checked = idx === index;
    });

    // Scroll to the section with smooth animation
    sections[index].scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
        isScrolling = false; // Allow scrolling after the transition
    }, scrollDelay);
};

// Handle the wheel scroll
const handleWheel = (event) => {
    if (isScrolling) return;
    
    if (event.deltaY > 0 && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);  // Scroll Down
    } else if (event.deltaY < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1);  // Scroll Up
    }
};

// Listen for wheel event
window.addEventListener("wheel", handleWheel);

// Handle radio button changes
radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
        scrollToSection(index);
    });
});

// Update section index on scroll event
window.addEventListener("scroll", () => {
    // Find the visible section by checking the scroll position
    let visibleSection = 0;
    sections.forEach((section, index) => {
        if (section.getBoundingClientRect().top <= window.innerHeight / 2) {
            visibleSection = index;
        }
    });
    currentSection = visibleSection;
    radios[currentSection].checked = true;  // Sync with radio button
});
