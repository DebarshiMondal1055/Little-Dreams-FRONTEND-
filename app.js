document.addEventListener('DOMContentLoaded', function() {

const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

    if (!isTouchDevice) {   
            const cursor = document.getElementById("cursor");
    const halo = cursor.querySelector(".halo");
    const trail = cursor.querySelector(".trail");

    gsap.set([halo, trail], {
        xPercent: -50,
        yPercent: -50
    });

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    gsap.ticker.add(() => {
        // Main halo follows smoothly
        gsap.to(halo, {
            x: mouseX,
            y: mouseY,
            duration: 0.25,
            ease: "power3.out",
            overwrite: true
        });

        // Trail lags behind (liquid neon feel)
        trailX += (mouseX - trailX) * 0.12;
        trailY += (mouseY - trailY) * 0.12;

        gsap.set(trail, {
            x: trailX,
            y: trailY
        });
    });
    }

    document.querySelectorAll(".features").forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, {
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                duration: 0.35,
                ease: "power3.out"
            });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, {
                scale: 1,
                y: 0,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                duration: 0.35,
                ease: "power3.out"
            });
        });
    });

 document.querySelectorAll(".features i").forEach(icon => {
    const card = icon.closest(".features");

    card.addEventListener("mouseenter", () => {
        gsap.to(icon, {
            scale: 1.15,
            duration: 0.3,
            ease: "power3.out"
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(icon, {
            scale: 1,
            duration: 0.3,
            ease: "power3.out"
        });
    });
});


    document.querySelectorAll(".service-card").forEach(card => {
    const img = card.querySelector("img");

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        gsap.to(card, {
            scale: 1.02,
            rotateX,
            rotateY,
            y: -14,
            duration: 0.4,
            ease: "power3.out"
        });

        if (img) {
            gsap.to(img, {
                scale: 1.10,
                x: (x - centerX) * 0.03,
                y: (y - centerY) * 0.03,
                duration: 0.6,
                ease: "power3.out"
            });
        }
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            y: 0,
            duration: 0.6,
            ease: "power3.out"
        });

        if (img) {
            gsap.to(img, {
                scale: 1,
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "power3.out"
            });
        }
    });
});



    
    

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

