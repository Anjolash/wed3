var isMenuOpen = true;


function toggleMenu() {
    if(isMenuOpen){
        document.body.classList += " menu--open"
        isMenuOpen = false;
    }
    else{
        document.body.classList.remove("menu--open") 
        isMenuOpen = true;
    }
}



const text = document.querySelector(".text_1");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Entrepreneurs";
    },0);
    setTimeout(() => {
        text.textContent = "Events";
    },4000);
    setTimeout(() => {
        text.textContent = "Weddings";
    },8000);
    setTimeout(() => {
        text.textContent = "Families";
    },12000);
    setTimeout(() => {
        text.textContent = "Athletes";
    },16000);
    setTimeout(() => {
        text.textContent = "Small Business";
    },20000);
    setTimeout(() => {
        text.textContent = "Musicians";
    },24000);
    setTimeout(() => {
        text.textContent = "Anything";
    },28000);
}

textLoad();
setInterval(textLoad, 28000);


var acc = document.getElementsByClassName("accordion");
var dropdown = document.getElementsByClassName("dropdown");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.previousElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}