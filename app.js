let modalImg = document.querySelectorAll(".modal-img");
let modalContentImg = document.querySelector(".modal-content-img");
let modal = document.querySelector(".modal-container");
let closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

for (let index = 0; index < modalImg.length; index++) {
  modalImg[index].addEventListener("click", (e) => {
    let currentModalImage = e.target.src;
    modalContentImg.src = currentModalImage;
    modal.style.display = "block";
  });
}
