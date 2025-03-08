const news = document.querySelector(".image-container");
const button = document.querySelector(".button");
const searchButton = document.querySelector(".search-icon");
const sportButton = document.querySelector("#sport");
const worldButton = document.querySelector("#world");
const entertaimentButton = document.querySelector("#entertaiment");


function devMsg(elem){
elem.addEventListener("click", () => {
  if (!document.querySelector(".info-text")) {
    const infoText = document.createElement("div");
    infoText.classList.add("info-text");
    infoText.textContent = "Thanks you for visiting our website! Some functions is still under development.";

    elem.insertAdjacentElement("afterend", infoText);
    setTimeout(() => {
    infoText.remove();
  }, 1000);
  }
});
}

devMsg(news);
devMsg(button);
devMsg(searchButton);
devMsg(sportButton);
devMsg(worldButton);
devMsg(entertaimentButton);