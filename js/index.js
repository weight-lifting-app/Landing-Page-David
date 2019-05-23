const siteContent= {
    "a-team":{
        "nav-item-1": "Home",
        "nav-item-2": "About Us",
        "nav-item-3": "Login"
    }
}

// nav
const a-team = document.querySelectorAll('.navi .a-team a');
a-team[0].textContent = siteContent["a-team"]["nav-item-1"];
a-team[1].textContent = siteContent["a-team"]["nav-item-2"];
a-team[2].textContent = siteContent["a-team"]["nav-item-3"];