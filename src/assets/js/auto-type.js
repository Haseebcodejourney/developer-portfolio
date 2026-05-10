document.addEventListener('DOMContentLoaded', function () {
    // Array of strings to be typed
    const textArray = ["Developer.", "Professional Coder."];
    const typingSpeed = 100;
    let textIndex = 0;
    let charIndex = 0;
    const textElement = document.getElementById('auto-typing-text');
    function type() {
      if (charIndex < textArray[textIndex].length) {
        textElement.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, typingSpeed * 2);
      }
    }

    function erase() {
      if (charIndex > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        charIndex--;
        setTimeout(erase, typingSpeed / 2);
      } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, typingSpeed);
      }
    }
    type();
  });




  //For Header
      function debounce(func, delay) {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(func, delay);
        };
    }

    window.onscroll = debounce(function() {
        var header = document.getElementById('main-header');
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Adjust the scroll position where you want to add the class
        var triggerPosition = 100; // Change this value as needed

        if (scrollPosition >= triggerPosition) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, 100);