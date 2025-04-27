var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

//Scroll to Top Button

// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


// See more button will show more projects
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const extraWorkLists = document.querySelectorAll(".see-more");

    toggleButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        const isShowing = toggleButton.textContent === "See Less";

        extraWorkLists.forEach(workList => {
            if (isShowing) {
                workList.classList.remove("show");
            } else {
                workList.classList.add("show");
            }
        });

        toggleButton.textContent = isShowing ? "See More" : "See Less";
    });
});

















// Contact menu form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const serviceID = 'service_l45pkaj'; // Replace with your actual service ID
    const templateID = 'template_how6s16'; // Replace with your actual template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = 'Message sent successfully.';
            formMessage.style.color = 'green';
            this.reset(); // Reset the form

            // Remove the message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
            
        }, (error) => {
            const formMessage = document.getElementById('formMessage');
            formMessage.textContent = 'Failed to send message. Please try again.';
            formMessage.style.color = 'red';
            console.error('EmailJS error:', error);
        });
});