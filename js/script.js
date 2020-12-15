"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 1; i++) {
            const a = prompt("Один из послежних просмотренных фильмов?", ""),
                b = prompt("На сколько вы его оцените?", "");

            if (a != null && a != "" && a.length < 50 && b != null) {
                personalMovieDB.movies[a] = b;
                console.log("success");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("To fiew movies");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Well done!");
        } else if (personalMovieDB.count >= 30) {
            console.log("You are movies king!");
        } else {
            console.log("Error");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 1; i++) {
            // const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            
            // if (genre === '' || genre == null) {
            //     console.log("Вы ввели некорректные данные или не ввели их вовсе");
            //     i--;
            // } else { 
            //     personalMovieDB.genres[i] = genre;
            // }

            const genres = prompt(`Введите любимые жанры через запятую`).toLocaleLowerCase();

            if (genres === "" || genres == null) {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i--;
            } else {
                personalMovieDB.genres = genres.split(",");
                personalMovieDB.genres.sort();
            }

            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });
        }
    },
    toggleVidibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

console.log(personalMovieDB);