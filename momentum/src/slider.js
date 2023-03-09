const prevButtonEl = document.querySelector(".slide-prev");
const nextButtonEl = document.querySelector(".slide-next");

export function SetRundomImg() {
  let count = 0;
  let number = 0;
  let img;
  const date = new Date();
  const hours = date.getHours();

  const arrImgFolder = ["night", "morning", "afternoon", "evening"];
  let imgFolder = arrImgFolder[Math.floor(hours / 6)];

  let numberRundom = Math.floor(Math.random() * 20) + 1;
  number = numberRundom < 10 ? "0" + numberRundom : numberRundom;

  function slowLoad() {
    img = new Image();
    img.src = `https://raw.githubusercontent.com/Galiia-GR/stage1-tasks/assets/images/${imgFolder}/${number}.jpg`;
    img.addEventListener("load", () => {
      document.body.style.backgroundImage = `
  url('https://raw.githubusercontent.com/Galiia-GR/stage1-tasks/assets/images/${imgFolder}/${number}.jpg')`;
    });
  }

  slowLoad();
  count = +number;

  nextButtonEl.addEventListener("click", () => {
    if (count < 20) {
      count = count + 1;
      console.log(count);
    } else {
      count = 1;
      console.log(count);
    }
    number = count < 10 ? "0" + count : count;
    slowLoad();
  });

  prevButtonEl.addEventListener("click", () => {
    if (count <= 20 && count > 1) {
      count = count - 1;
      console.log(count);
    } else {
      count = 20;
      console.log(count);
    }
    number = count < 10 ? "0" + count : count;
    slowLoad();
  });
}
