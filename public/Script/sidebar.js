document.addEventListener("DOMContentLoaded", () => {

    const pushmenu = document.getElementsByClassName("pushmenu")

    const hiddenOverley = document.querySelector(".hidden-overley")

hiddenOverley.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("show")
    document.querySelector(".sidebar").classList.toggle("show")
    document.querySelector("body").classList.toggle("sidebar-opened")
    for (i = 0; i < pushmenu.length; i++) {
        pushmenu[i].classList.toggle("open")
    }
})

const pushmenuFunction = function () {
    document.querySelector(".pushmenu").classList.toggle("open")
    document.querySelector(".sidebar").classList.toggle("show")
    document.querySelector(".hidden-overley").classList.toggle("show")
    document.body.classList.toggle("sidebar-opened")
}

for (i = 0; i < pushmenu.length; i++) {
    pushmenu[i].addEventListener("click", pushmenuFunction, false)
}

const sidebarAccordeon = document.querySelectorAll(
    ".sidebar .menu-parent-item a:first-child"
)
const accordeonFunction = function () {
this.parentNode.querySelector("ul").classList.toggle("show")
this.querySelector("i").classList.toggle("rotate")
}

for (i = 0; i < sidebarAccordeon.length; i++) {
    sidebarAccordeon[i].addEventListener("click", accordeonFunction, false)
}
})