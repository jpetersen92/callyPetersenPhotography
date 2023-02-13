const callyApp = {};

const testimonials = {
    test1: {
        id: 1,
        note: "Cally is a fantastic photographer who not only captures her subjects beautifully but has the ability of capturing the emotive nuance of the moment. We’ve hired her many times for family photos, maternity, couples shots, she does it all and then some. She’s got a positivity and joy that is disarming and makes shooting with her comfortable and fun. We couldn’t recommend her enough!",
        writer: "—Gabe Penner"
    },
};

// start: Mobile
callyApp.mobile = () => {
    console.log("lets get mobile");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navMenu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle('active')
        navMenu.classList.toggle('active')
    });

    document.querySelectorAll(".navLink").forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }))
}
// end: Mobile

// start: Testimonials

// end: Testimonials


// start: Loader
callyApp.loader = () => {
    console.log("Loading, Please Hold")
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        loader.classList.add('loaderFinish')
    })
}
// end: Loader


callyApp.init = () => {
    console.log("It's Alive");
    callyApp.loader();
    callyApp.mobile();
}

callyApp.init();