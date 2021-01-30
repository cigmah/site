function toggle(elementId) {
    if (window.innerWidth <= 1024) {
        var element = document.getElementById(elementId);
        if (element.style.display == "block") {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        };
    };
};

function toggleNav() { toggle("nav-link-list") };
function toggleSideNav() { toggle("side-navigation-list")}
