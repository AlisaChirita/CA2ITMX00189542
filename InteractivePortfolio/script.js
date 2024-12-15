document.addEventListener('DOMContentLoaded', function () {
    
    const showHobbiesBtn = document.getElementById('showHobbiesBtn');
    const hobbiesSection = document.getElementById('hobbiesSection');
    const cvButton = document.querySelector('.nav-item a[href$=".docx"]');
    const viewCvBtn = document.getElementById('viewCvBtn'); 
    const cvModal = new bootstrap.Modal(document.getElementById('cvModal')); 
    const contactMeBtn = document.getElementById('contactMeBtn'); 
    const contactInfoModal = new bootstrap.Modal(document.getElementById('contactInfoModal')); 
    const educationCarousel = new bootstrap.Carousel('#educationCarousel', {
        interval: false 
      });
    

    
    showHobbiesBtn.addEventListener('click', function () {
        hobbiesSection.style.display = hobbiesSection.style.display === 'none' ? 'block' : 'none';
    });

    /* cv dl */
    cvButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        window.location.href = cvButton.getAttribute('href'); 
    });

    /* cv viewer*/
    viewCvBtn.addEventListener('click', function () {
        cvModal.show(); 
    });

    /*contact  */
    contactMeBtn.addEventListener('click', function () {
        contactInfoModal.show(); 
    });

    /* year change car*/
    function toggleDetails(yearId) {
        const details = document.getElementById(`details-${yearId}`);
        details.style.display = details.style.display === 'none' || !details.style.display ? 'block' : 'none';
    }
});
