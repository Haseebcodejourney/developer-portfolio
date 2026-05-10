document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('themeToggle');
    const commonStylesheet = document.getElementById('commonStylesheet');
    const lightThemeStylesheet = document.getElementById('lightThemeStylesheet');
    const darkThemeStylesheet = document.getElementById('darkThemeStylesheet');
    const contentElement = document.getElementById('content');
    const lightSpan = document.querySelector('.light-span');
    const darkSpan = document.querySelector('.dark-span');
    const visibleClass = 'visible';
    const hiddenClass = 'hidden';

    // Check for saved theme preference in localStorage
    let savedTheme = localStorage.getItem('theme');

    // Apply the saved theme or default to light theme
    document.body.classList.toggle('dark-theme', savedTheme === 'dark');

    // Set the initial class on the button and span elements
    themeToggle.classList.toggle('dark-theme', savedTheme === 'dark');
    updateSpanVisibility();

    // Function to update span visibility based on the theme
    function updateSpanVisibility() {
        if (savedTheme === 'dark') {
            lightSpan.classList.remove(visibleClass);
            darkSpan.classList.add(visibleClass);
        } else {
            darkSpan.classList.remove(visibleClass);
            lightSpan.classList.add(visibleClass);
        }
    }

    // Function to toggle between light and dark themes on button click
    themeToggle.addEventListener('click', function () {
        if (darkThemeStylesheet.disabled) {
            enableDarkTheme();
        } else {
            enableLightTheme();
        }
    });

    // Function to enable light theme
    function enableLightTheme() {
        darkThemeStylesheet?.setAttribute('disabled', 'true');
        commonStylesheet?.removeAttribute('disabled');
        contentElement?.classList.remove(visibleClass);
        contentElement?.classList.add(hiddenClass);
        savedTheme = 'light';
        updateSpanVisibility();
    }

    // Function to enable dark theme
    function enableDarkTheme() {
        darkThemeStylesheet?.removeAttribute('disabled');
        commonStylesheet?.setAttribute('disabled', 'true');
        contentElement?.classList.remove(hiddenClass);
        contentElement?.classList.add(visibleClass);
        savedTheme = 'dark';
        updateSpanVisibility();
    }

});
