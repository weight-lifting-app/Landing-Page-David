// Objects
const siteContent = {
    "a-team":{
        "nav-item-1": "Home",
        "nav-item-2": "About Us",
        "nav-item-3": "Login"
    },
    "topp":{
        "p1": "Most people tend to hit plateau while working out because we usually lift and rep the same amount for weeks. This app helps you keep count of reps and measure the weight from previous workouts so you can make some gains.",       
    },
    "para":{
        "p2": "With this app, you're able to precisely record your past workouts so that you can measure where you should be for the next workout.",
        "p3": "It can be used by trainers, weightlifters, or just about anyone who enjoys working out."
    },
    "click":{
        "p4": "Click below to sign up!"
    },
}

// DOM
const aTeam = document.querySelectorAll('.navi .a-team a');
aTeam[0].textContent = siteContent["a-team"]["nav-item-1"]; // Home
aTeam[1].textContent = siteContent["a-team"]["nav-item-2"];
aTeam[2].textContent = siteContent["a-team"]["nav-item-3"];

const para = document.querySelectorAll('p');
para[0].textContent = siteContent["topp"]["p1"];
para[1].textContent = siteContent["para"]["p2"];
para[2].textContent = siteContent["para"]["p3"];

const signUp = document.querySelector('.click h2');
signUp.textContent = siteContent["click"]["p4"];


const navClick = document.querySelector('.headline')
navClick.addEventListener('mouseover', function(event){
    console.log('navclick')
    navClick.style.color = "#8c142b"
})

const clickk = document.querySelector('.click button')
clickk.addEventListener('click', function(event){
    console.log('click')
    clickk.style.color = "#8c142b"
})

const navLinks = document.querySelectorAll(".a-team a");
navLinks.forEach(links => {
    links.style.color = "#8c142b"
})
