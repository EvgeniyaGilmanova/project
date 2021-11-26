const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

const a = prompt('Один из последних просмотренных  фильмов?', ''),
      b = prompt('На сколько оцениваете его?', ''),
      c = prompt('Один из последних просмотренных  фильмов?', ''),
      d = prompt('На сколько оцениваете его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);