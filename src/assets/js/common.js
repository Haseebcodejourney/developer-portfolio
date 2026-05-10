//For Lazy Loadiing
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = document.querySelectorAll('.lazy-load');
  
    var lazyLoad = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          img.src = img.getAttribute('data-src');
          img.classList.remove('lazy-load');
          lazyLoad.unobserve(img);
        }
      });
    });
  
    lazyImages.forEach(function(img) {
      lazyLoad.observe(img);
    });
  });

  //Forr View more and view less button
    // Getting references to the button and detail divs
    var toggleButton = document.getElementById('toggleButtonViewmore');
    var detailModal = document.querySelector('.more-detail-modal');
    var detailModalAdd = document.querySelector('.more-detail-modal-add');
  
    // Set .more-detail-modal to be visible by default
    detailModal.style.display = 'block';
  
    // Adding a click event listener to the button
    toggleButton.addEventListener('click', function () {
        // Toggle the visibility of the detail divs and change button text
        if (detailModal.style.display === 'none') {
            // If the first detail div is hidden, show it and hide the second
            detailModal.style.display = 'block';
            detailModalAdd.style.display = 'none';
            toggleButton.textContent = 'VIEW Less';
        } else {
            // If the first detail div is visible, hide it and show the second
            detailModal.style.display = 'none';
            detailModalAdd.style.display = 'block';
            toggleButton.textContent = 'VIEW More';
        }
    });

    //For Resume 
      // Function to trigger the download
  function downloadResume() {
    // You can replace 'path/to/your/resume.pdf' with the actual path to your resume file
    var resumePath = 'path/to/your/resume.pdf';

    // Creating an invisible link element
    var link = document.createElement('a');
    link.href = resumePath;

    // Specifying the download attribute and filename
    link.download = 'Hamza_Haseeb_Resume.pdf';

    // Simulating a click on the link to trigger the download
    document.body.appendChild(link);
    link.click();

    // Removing the link from the document
    document.body.removeChild(link);
}

// Adding a click event listener to the button
document.getElementById('downloadButton').addEventListener('click', downloadResume);

// For Bottom to Top Button
  document.addEventListener('DOMContentLoaded', function () {
    var backToTopButton = document.querySelector('.backto-top');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) { // Adjust the scroll height as needed
        backToTopButton.style.opacity = '1';
      } else {
        backToTopButton.style.opacity = '0';
      }
    });
    backToTopButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      backToTopButton.style.opacity = '0';
    });
  });     

    // For Toggle Button
    function toggleMode() {
        const body = document.body;
  
        // Toggle between dark and light mode
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");
  
        // Toggle the visibility of the text elements
        const darkSpan = document.querySelector('.dark-span');
        const lightSpan = document.querySelector('.light-span');
  
        darkSpan.classList.toggle('hidden');
        lightSpan.classList.toggle('hidden');
      }
