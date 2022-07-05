const buttons = document.querySelectorAll(".card-buttons button")
const sections = document.querySelectorAll(".card-section")
const card = document.querySelectorAll(".card")

const handleButtonClick = e => {
    const targetSection = e.target.getAttribute("data-section")
    const section = document.querySelector(targetSection)
    targetSection !== "#about" ?
    card.classList.add("is-active") :
    card.classList.remove("is-active")
    card.setAttribute("data-state", targetSection)
    section.forEach(s => s.classList.remove("is-active"))
    
}