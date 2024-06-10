const DIRECTORS = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр, Монтажёр',
      films: 'https://www.film.ru/person/stiven-spilberg',
      top_rated_film: 'Назад в будущее'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр, Монтажёр, Оператор, Композитор',
      films: 'https://www.film.ru/person/kristofer-nolan',
      top_rated_film: 'Начало'
    },
    {
      name: 'Джордж Лукас',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр, Монтажёр, Оператор',
      films: 'https://www.film.ru/person/dzhordzh-lukas',
      top_rated_film: 'Звёздные войны: Эпизоды 1-6'
    },
    {
      name: 'Дени Вильнёв',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/deni-vilnev',
      top_rated_film: 'Дюна'
    },
    {
      name: 'Квентин Тарантино',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр, Монтажёр, Оператор',
      films: 'https://www.film.ru/person/kventin-tarantino',
      top_rated_film: 'Криминальное чтиво'
    },
    {
      name: 'Питер Джексон',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр, Монтажёр, Оператор, Художник',
      films: 'https://www.film.ru/person/piter-dzhekson',
      top_rated_film: 'Властелин колец: Трилогия'
    },
    {
      name: 'Джеймс Кэмерон',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр, Монтажёр, Оператор, Художник',
      films: 'https://www.film.ru/person/dzheyms-kemeron',
      top_rated_film: 'Терминатор 2: Судный день'
    },
    {
        name: 'Гай Ричи',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/gay-richi',
        top_rated_film: 'Джентельмены'
      },
      {
        name: 'Мартин Скорсезе',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр, Монтажёр, Оператор',
        films: 'https://www.film.ru/person/martin-skorseze',
        top_rated_film: 'Волк с Уолл-стрит'
      },
  ];

  

    const prodName = document.querySelectorAll('.name').forEach((elem, index) => elem.textContent = DIRECTORS[index].name);
    const prodCareer = document.querySelectorAll('.career').forEach((elem, index) => elem.textContent = DIRECTORS[index].career);
    const prodFilms = document.querySelectorAll('.films').forEach((elem, index) => elem.href = DIRECTORS[index].films);
    const bestFilm = document.querySelectorAll('.best__film').forEach((elem, index) => elem.textContent = DIRECTORS[index].top_rated_film);