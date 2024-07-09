// script for slider on hero section
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(nextSlide, 1000); // Change slide every 3 seconds (adjust as needed)
});
// slider for hero section end here


// script copy whatsapp number

// display number
document.getElementById('openPopUpBox').addEventListener('click', function () {
    const copyBtn = document.getElementById('copy-list');
    if (copyBtn.style.display === 'none') {
        copyBtn.style.display = 'block';
    } else {
        copyBtn.style.display = 'none'
    }
})


// copy number

// copy number function for ovi
document.addEventListener('DOMContentLoaded', function () {
    let copyButton = document.getElementById('copyBtnOvi');
    let copyStatus = document.getElementById('copyNumberOvi');

    // Function to copy a specific word to clipboard
    function copyWord() {
        const wordToCopy = '+880 1401-612266';
        navigator.clipboard.writeText(wordToCopy).then(function () {
            copyNumberOvi.innerText = 'number copied to clipboard!';
        }, function (err) {
            copyNumberOvi.innerText = 'Failed to copy word.';
            console.error('Could not copy text: ', err);
        });
    }

    // Event listener for copy button
    copyButton.addEventListener('click', copyWord);
});

// copy number function for tahsin
document.addEventListener('DOMContentLoaded', function () {
    let copyButton = document.getElementById('copyBtnTsn');
    let copyStatus = document.getElementById('copyNumberTsn');

    // Function to copy a specific word to clipboard
    function copyWord() {
        const wordToCopy = '+880 1610-300268';
        navigator.clipboard.writeText(wordToCopy).then(function () {
            copyNumberTsn.innerText = 'number copied to clipboard!';
        }, function (err) {
            copyNumberTsn.innerText = 'Failed to copy word.';
            console.error('Could not copy text: ', err);
        });
    }

    // Event listener for copy button
    copyButton.addEventListener('click', copyWord);
});