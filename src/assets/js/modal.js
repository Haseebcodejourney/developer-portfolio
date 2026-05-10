document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const customModal = document.getElementById("customModal");

    openModalBtn.addEventListener("click", function () {
        customModal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", function () {
        customModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === customModal) {
            customModal.style.display = "none";
        }
    });
});
