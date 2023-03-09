export async function showQuotes() {
  const quoteEl = document.querySelector(".quote");
  const authorEl = document.querySelector(".author");
  const buttonChangeQoteEl = document.querySelector(".change-quote");

  let numberRundom;

  if (localStorage.getItem("lang")) {
    getQuoteRu();

    buttonChangeQoteEl.addEventListener("click", () => {
      getQuoteRu();
    });
  } else {
    getQuote();

    buttonChangeQoteEl.addEventListener("click", () => {
      getQuote();
    });
  }

  async function getQuote() {
    numberRundom = Math.floor(Math.random() * 1643) + 1;

    const urlQuote = "https://type.fit/api/quotes";
    const responseQuote = await fetch(urlQuote);

    if (responseQuote.ok) {
      const result = await responseQuote.json();
      quoteEl.textContent = result[numberRundom].text;
      authorEl.textContent = result[numberRundom].author;
    } else {
      console.log("can't find quote");
    }
  }

  function getQuoteRu() {
    const result = [
      {
        text: "Чем умнее человек, тем легче он признает себя дураком.",
        author: "Альберт Эйнштейн",
      },
      {
        text: "Никогда не ошибается тот, кто ничего не делает.",
        author: "Теодор Рузвельт",
      },
      {
        text: "Менее всего просты люди, желающие казаться простыми.",
        author: "Лев Николаевич Толстой",
      },
      {
        text: "Мы находимся здесь, чтобы внести свой вклад в этот мир. Иначе зачем мы здесь?.",
        author: "Стив Джобс",
      },
      {
        text: "Мой способ шутить  это говорить правду. На свете нет ничего смешнее",
        author: "Бернард Шоу",
      },
      {
        text: "Тихо-тихо ползи, улитка, по склону Фудзи, вверх, до самых высот.",
        author: "Кобаяси Исса",
      },
      {
        text: "Чем больше любви, мудрости, красоты, доброты вы откроете в самом себе, тем больше вы заметите их в окружающем мире.",
        author: "Мать Тереза",
      },
      {
        text: "Ядерную войну невозможно выиграть.",
        author: "Андрей Сахаров",
      },
      {
        text: "Мышление верх блаженства и радость жизни, доблестнейшее занятие человека.",
        author: "Аристотель",
      },
      {
        text: "Характер  это и есть судьба.",
        author: "Майя Плисецкая",
      },
      {
        text: "Не так уж сложно изменить общество сложно изменить себя.",
        author: "Нельсон Мандела",
      },
      {
        text: "Сложнее всего начать действовать, все остальное зависит только от упорства.",
        author: "Амелия Эрхарт",
      },
      {
        text: "Начинать всегда стоит с того, что сеет сомнения.",
        author: "Борис Стругацкий",
      },
      {
        text: "Наука — это организованные знания, мудрость — это организованная жизнь.",
        author: "Иммануил Кант",
      },
      {
        text: "Свобода ничего не стоит, если она не включает в себя свободу ошибаться.",
        author: "Махатма Ганди",
      },
      {
        text: "Начинайте делать все, что вы можете сделать  и даже то, о чем можете хотя бы мечтать. В смелости гений, сила и магия.",
        author: "Иоганн Вольфганг Гете",
      },
      {
        text: "Идите уверенно по направлению к мечте. Живите той жизнью, которую вы сами себе придумали.",
        author: "Уоррен Баффет",
      },
    ];

    numberRundom = Math.floor(Math.random() * 17) + 1;
    quoteEl.textContent = result[numberRundom].text;
    authorEl.textContent = result[numberRundom].author;
  }
}
