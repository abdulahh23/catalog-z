let btn = document.querySelector(".mob_toggle");
let mob_link = document.querySelector(".toogle_nav");
let toogle = false;
btn.addEventListener("click", () => {
    toogle = !toogle;
    if (toogle) {
        mob_link.style.opacity = 100;
        mob_link.style.transform = "translateX(7.5rem)";
    } else {
        mob_link.style.opacity = 0;
        mob_link.style.transform = "translateX(-7.5rem)";
    }
})
