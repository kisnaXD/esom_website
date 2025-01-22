document.addEventListener("DOMContentLoaded", function() {
    const toggleSidebarButton = document.getElementById('toggleSidebar');
    const closeSidebarButton = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
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
});
