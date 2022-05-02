let bttnMuted = document.getElementById('bttnMuted');
let theme = document.getElementById("theme");
let select = document.getElementById("select");


bttnMuted.addEventListener('click', () => {
    theme.muted = !theme.muted;
    select.muted = !select.muted;
    let bttns = document.getElementsByTagName("ion-icon");
    bttns[0].classList.toggle('active');
    bttns[1].classList.toggle('active');
})

//Menu
const listItems = document.querySelectorAll('li');
const sections = document.querySelectorAll('.content-section')

function activeLink() {
    select.play();
    sections.forEach(item => {
        item.classList.remove('active');
    });
    document.getElementById(this.getAttribute('data-section')).classList.toggle("active");
}

listItems.forEach((item) => {
    item.addEventListener('click', activeLink)
    }
);

theme.play();  
