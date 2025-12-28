document.addEventListener('DOMContentLoaded', function() {


    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const message=e.target.message.value; 
        if(!name || !email || !message){
            alert('Please fill in all fields.');
            return;
        }

        const text = `Welcome to Little Dreams%0A
        Name: ${name}%0A
        Email: ${email}%0A
        Message: ${message}`;

        window.open(
            `https://wa.me/7511111234?text=${text}`,
            "_blank"
        );
        alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
        e.target.reset();
    });
});