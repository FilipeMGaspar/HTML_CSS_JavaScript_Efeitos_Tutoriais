const Close = function() {
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".open").classList.add("active");
};

document.querySelector(".close").addEventListener("click", Close);
document.querySelector(".nope").addEventListener("click", Close);