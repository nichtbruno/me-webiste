const navLinkList = document.querySelectorAll(".nav_link");
const wPathname = window.location.pathname;

navLinkList.forEach(navLinkEl => {
    const navLinkPathname = new URL(navLinkEl.href).pathname;

    if ((wPathname === navLinkPathname) || (wPathname === "/index.html" && navLinkPathname === "/")) {
        navLinkEl.classList.add('active');  
    }
});
