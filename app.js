const callyApp = {};

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



// start: Loader
callyApp.loader = () => {
    console.log("Loading, Please Hold")
}
// end: Loader


callyApp.init = () => {
    console.log("It's Alive");

    callyApp.mobile();
}

callyApp.init();