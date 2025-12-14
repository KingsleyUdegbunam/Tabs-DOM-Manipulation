import { data } from "./data.js";

const renderElem = document.querySelector(".review");

const defaultDisplay = data[0].content;
renderElem.innerHTML = defaultDisplay;

whatDisplay();

function whatDisplay() {
  document.querySelectorAll(".tabs").forEach((tab) => {
    tab.addEventListener("click", () => {
      const id = tab.dataset.id;

      let select;
      data.forEach((marker) => {
        if (id !== marker.tabId) {
          return;
        }

        select = marker.content;
      });

      renderElem.innerHTML = select;

      document.querySelectorAll(".tabs").forEach((btn) => {
        btn.classList.remove("active");
      });

      tab.classList.add("active");
    });
  });
}
