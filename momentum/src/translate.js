const settingBtnEl = document.querySelector(".setting");
const settingContEl = document.querySelector(".setting-container");
let langBtnEl = document.querySelector(".toggle__el");

export function checkLang() {
  settingBtnEl.addEventListener("click", () => {
    settingContEl.classList.toggle("setting__active");
  });

  let lang;

  if (localStorage.getItem("lang")) {
    langBtnEl.classList.add("active__toggle");
  }

  saveLang();

  function saveLang() {
    langBtnEl.addEventListener("click", () => {
      if (
        langBtnEl.classList.contains("active__toggle") &&
        localStorage.getItem("lang")
      ) {
        langBtnEl.classList.remove("active__toggle");
        localStorage.removeItem("lang", lang);
        console.log(localStorage);
      } else {
        langBtnEl.classList.add("active__toggle");
        lang = "ru";
        localStorage.setItem("lang", lang);
        console.log(localStorage);
      }
    });
  }
}
