window.addEventListener("scroll" , () => {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("sticky", window.scrollY);
});
