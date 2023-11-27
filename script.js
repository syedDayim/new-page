document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners to card clicks
    document.querySelectorAll('.card').forEach(function (card, index) {
        card.addEventListener('click', function () {
            // Set the content based on the selected card
            document.getElementById('testimonialHeading').innerText = testimonials[index].heading;
            document.getElementById('testimonialContent').innerText = testimonials[index].content;
        });
    });

    // Testimonials data
    const testimonials = [
        {
            heading: "Vidhyalakshmi Ramesh, Axon Medica",
            content: "The professionals at Shuraa took the time to understand our unique business needs and undoubtedly provided the critical support we required to efficiently manage processes in support of preparing our company for future business endeavors. We really appreciate the time they dedicated to helping our company constantly move forward. They are very professional and friendly. I would have no hesitation in recommending Shuraa as they have always exceeded our expectations. I wholeheartedly endorse the Shuraa team and recommend working with them to set up your business for success."
        },
        {
            heading: "Sunil Duggal, CEO, Dabur Healthcare",
            content: "Shuraa Business Setup is without doubt the leading formation expert in the UAE. I have been dealing with them for many years and their in-house expertise and professional approach is commendable. Their advice is always helpful and they partner to provide suitable suggestions for our needs. The turnaround speeds of their services are very timely and allows our operation to run smoothly. I recommend Shuraa to everyone looking to setup a business in the UAE."
        },
        {
            heading: "Nuseir Yassin, Founder, Nas Daily",
            content: "I am relieved that I entrusted Shuraa with the legwork of setting up my media and production company, Nas Studios, in Dubai. Their licensing team was swift with the preparation of our business and immigration documents."
        },
        
    ];
});