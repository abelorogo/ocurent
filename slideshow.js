document.addEventListener("DOMContentLoaded", function() {
    const images = [
        {
            src: "/static/electricity/images/collection3.jpg",
            title: "Solar Energy Solutions",
            text: "Harness the power of the sun! Our high-quality solar panel installations ensure energy efficiency, reduced electricity bills, and a sustainable future. Whether for residential or commercial use, we provide reliable and long-lasting solutions."
        },
        {
            src: "/static/electricity/images/electrical-wiring.png",
            title: "Electrical Wiring",
            text: "Get safe, efficient, and professional electrical wiring for your home, office, or industrial space. Our certified electricians ensure top-notch installations that meet all safety and performance standards."
        },
        {
            src: "/static/electricity/images/solar.png",
            title: "Power Backup Solutions",
            text: "Never experience a blackout again! Our advanced power backup systems, including inverters and generators, keep your home and business running smoothly during outages."
        },
        {
            src: "/static/electricity/images/lighting.png",
            title: "Lighting Solutions",
            text: "Brighten your space with our modern, energy-efficient lighting solutions. From LED installations to smart lighting controls, we enhance aesthetics while cutting down on energy costs."
        },
        {
            src: "/static/electricity/images/cctv.png",
            title: "CCTV Installation",
            text: "Protect what matters most! Our high-definition CCTV systems offer 24/7 surveillance, remote access, and advanced security features to keep your property safe."
        },
        {
            src: "/static/electricity/images/automation.png",
            title: "Home Automation",
            text: "Transform your home into a smart, connected space! Control lighting, security, appliances, and more with our state-of-the-art home automation solutions for maximum comfort and security."
        }
    ];

    let index = 0;
    const slideImg = document.getElementById("slide-img");
    const slideTitle = document.getElementById("slide-title");
    const slideText = document.getElementById("slide-text");

    function changeSlide() {
        index = (index + 1) % images.length;
        slideImg.src = images[index].src;
        slideTitle.textContent = images[index].title;
        slideText.textContent = images[index].text;
    }

    setInterval(changeSlide, 9000);
});
