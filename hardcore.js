const openPopupBtn = document.getElementById("openPopup");
const closePopupBtn = document.getElementById("closePopup");
const popup = document.getElementById("popup");

// Открытие PopUp
openPopupBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

// Закрытие PopUp
closePopupBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Закрытие PopUp при клике вне окна
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});