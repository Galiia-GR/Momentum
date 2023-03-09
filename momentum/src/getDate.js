export function getTime() {
  const showTimeEl = document.querySelector(".time");
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  showTimeEl.textContent = currentTime;

  getDate();
  showGreeting();
  setTimeout(getTime, 1000);
}

export function getDate() {
  const showDateEl = document.querySelector(".date");
  const date = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  let lang = localStorage.getItem("lang") ? "ru-RU" : "en-US";

  const currentDate = date.toLocaleDateString(lang, options);

  showDateEl.textContent = currentDate;
}

export function showGreeting() {
  const engArr = [
    "Good night,",
    "Good morning,",
    "Good afternoon,",
    "Good evening,",
  ];

  const ruArr = [
    "Спокойной ночи,",
    "Доброе утро,",
    "Добрый день,",
    "Добрый вечер,",
  ];

  const date = new Date();
  const hours = date.getHours();
  const greetingArr = localStorage.getItem("lang") ? ruArr : engArr;

  const greetingEl = document.querySelector(".greeting");
  greetingEl.textContent = greetingArr[Math.floor(hours / 6)];
}

export function nameSave() {
  const name = document.querySelector(".name");
  let lang = localStorage.getItem("lang")
    ? "[Введите свое имя]"
    : "[Enter your name]";

  if (!localStorage.getItem("name")) {
    name.placeholder = lang;
  }

  name.addEventListener("click", () => {
    function setLocalStorage() {
      localStorage.setItem("name", name.value);
    }
    window.addEventListener("beforeunload", setLocalStorage);
  });

  function getLocalStorage() {
    if (localStorage.getItem("name")) {
      name.value = localStorage.getItem("name");
    }
  }
  window.addEventListener("load", getLocalStorage);
}
